// import Chessboard from './chess/chessboard';

class Game {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        
        this.chessboard = new Chessboard();
        this.playablePieces = BoardMounter.mount(this.chessboard);
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

    onPressed() {
        let isOverChessboard = mouseX > 0 && mouseX < this.width && mouseY > 0 && mouseY < this.height;

        if (isOverChessboard) {
            this.chessboard.onPressed();

            this.playablePieces.forEach(piece => {
                piece.onPressed();
            });

        }
    }

    onDragged() {
        this.playablePieces.forEach(piece => {
            piece.onDragged();
        });
    }

    onReleased() {
        this.chessboard.onReleased();

        this.playablePieces.forEach(piece => {
            piece.onReleased();
        });
    }

}