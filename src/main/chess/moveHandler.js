

class MoveHandler {

    constructor(chessboard, pieces) {
        this.chessboard = chessboard;
        this.pieces = pieces;
        this.selectedPiece = null;
    }

    onPressed() {
        this.handleSelectedPiece();
        this.handleSelectedSquare();
    }

    handleSelectedSquare() {
        let targetSquare = this.getTargetSquare();
        if (targetSquare && this.hasSelectedPiece()) {
            targetSquare.setSelect(true);
        }
    }

    handleSelectedPiece() {
        if (!this.hasSelectedPiece()) {
            this._setSelectedPiece();
        } else {
            if (this._isChangingSelectedPiece()) {
                this._setSelectedPiece();
            } else {
                this._releaseSelectedPiece();
            }
        }
    }

    hasSelectedPiece() {
        return this.selectedPiece !== null && this.selectedPiece.team == CURRENT_TURN.team;
    }

    _isChangingSelectedPiece() {
        let targetSquare = this.getTargetSquare();
        return this.selectedPiece != null && targetSquare.piece != null;
    }

    _movePieceTo(piece, targetSquare) {
        piece.moveTo(targetSquare);
        targetSquare.setSelect(true);
        this.selectedPiece = null;
        CURRENT_TURN.next();
    }

    onReleased() {
        this._releaseSelectedPiece();
    }

    _releaseSelectedPiece() {
        let targetSquare = this.getTargetSquare();

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

    getTargetSquare() {
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