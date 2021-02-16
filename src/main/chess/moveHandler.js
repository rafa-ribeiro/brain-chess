


class MoveHandler {

    constructor(chessboard, pieces) {
        this.chessboard = chessboard;
        this.pieces = pieces;
        this.selectedPiece = null;
    }

    onPressed() {
        if (this.selectedPiece == null) {
            this._setSelectedPiece();
        } else {
            if (this._isChangingSelectedPiece()) {
                this._setSelectedPiece();
            } else {
                this._releaseSelectedPiece();
            }
        }
    }

    _isChangingSelectedPiece() {
        let targetSquare = this._getTargetSquare();
        return this.selectedPiece != null && targetSquare.piece != null;
    }

    _movePieceTo(piece, targetSquare) {
        piece.moveTo(targetSquare);
        this.selectedPiece = null;
    }

    onReleased() {
        this._releaseSelectedPiece();
    }

    _releaseSelectedPiece() {
        let targetSquare = this._getTargetSquare();

        if (this.selectedPiece) {
            if (targetSquare) {
                if (targetSquare.piece) {
                    this.selectedPiece.resetPosition();
                } else {
                    this._movePieceTo(this.selectedPiece, targetSquare);
                }
            } else {
                this.selectedPiece.resetPosition();
            }
        }
    }

    _setSelectedPiece() {
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