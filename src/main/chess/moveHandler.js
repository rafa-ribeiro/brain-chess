


class MoveHandler {

    constructor(chessboard, pieces) {
        this.chessboard = chessboard;
        this.pieces = pieces;
        this.selectedPiece = null;
    }

    onReleased() {
        let targetSquare = this._getTargetSquare();
        console.log(targetSquare);
        console.log(this.selectedPiece);

        if (targetSquare && this.selectedPiece) {
            if (targetSquare.piece) {
                this.selectedPiece.resetPosition();
            } else {
                this.selectedPiece.moveTo(targetSquare);
            }
        } else {
            this.selectedPiece.resetPosition();
        }
    }

    onPressed() {
        let selectedPiece = null;
        let size = this.pieces.length;
        let idx = 0;

        while (!selectedPiece && idx < size) {
            let piece = this.pieces[idx];
            if (piece.isOver()) {
                selectedPiece = piece;
            }
            idx++;
        }
        this.selectedPiece = selectedPiece;
    }

    _getTargetSquare() {
        let targetSquare = null;

        let squaresList = this.chessboard.squaresList;
        let size = squaresList.length;

        let idx = 0;
        while (!targetSquare && idx < size) {
            let currentSquare = squaresList[idx];
            if (currentSquare.isOverSquare()) {
                targetSquare = currentSquare;
            }
            idx++;
        }
        return targetSquare;
    }

}