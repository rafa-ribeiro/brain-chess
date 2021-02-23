class Game {

    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.chessboard = new Chessboard();
        this.playablePieces = BoardMounter.mount(this.chessboard);
        this.moveHandler = new MoveHandler(this.chessboard, this.playablePieces);
    }

    setup() {

    }

    drawChessboard() {
        this.chessboard.draw();
    }

    drawPieces() {
        this.playablePieces.forEach(piece => {
            piece.draw();
        });
    }

    updateActiveSquare() {
        let targetSquare = this.moveHandler.getTargetSquare();
        if (targetSquare) {
            targetSquare.activate();
        }
    }

    onPressed() {
        let isOverChessboard = mouseX > 0 && mouseX < this.width && mouseY > 0 && mouseY < this.height;

        if (isOverChessboard) {
            this.playablePieces.forEach(piece => {
                piece.onPressed();
            });

            this.moveHandler.onPressed();
            this.putPieceOnTop(this.moveHandler.selectedPiece);
        }

    }

    onDragged() {
        this.playablePieces.forEach(piece => {
            piece.onDragged();
        });
    }

    onReleased() {
        this.playablePieces.forEach(piece => {
            piece.onReleased();
        });

        this.moveHandler.onReleased();
    }

    putPieceOnTop(piece) {
        if (piece) {
            let pieceIdx = this.playablePieces.indexOf(piece);
            this.playablePieces.splice(pieceIdx, 1);
            this.playablePieces.push(piece);
        }
    }

}