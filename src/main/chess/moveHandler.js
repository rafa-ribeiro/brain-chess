

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
        if (targetSquare && this.hasValidPiece()) {
            targetSquare.setSelect(true);
        }
    }

    handleSelectedPiece() {
        if (!this.hasValidPiece()) {
            this._setSelectedPiece();
        } else {
            if (this._isChangingSelectedPiece()) {
                this._unmarkSquare(this.selectedPiece.square);
                this._setSelectedPiece();
            } else {
                this._releaseSelectedPiece();
            }
        }
    }

    hasValidPiece() {
        return this.selectedPiece !== null && this.selectedPiece.team == CURRENT_TURN.team;
    }

    _isChangingSelectedPiece() {
        let targetSquare = this.getTargetSquare();
        return this.selectedPiece != null && targetSquare.piece != null;
    }

    _movePieceTo(piece, targetSquare) {
        let sourceSquare = piece.square;
        piece.moveTo(targetSquare);
        this._markLastMove(sourceSquare, targetSquare);
        this.selectedPiece = null;
        CURRENT_TURN.next();
    }

    _markLastMove(sourceSquare, targetSquare) {
        let squares = this.chessboard.squaresList;
        squares.forEach(square => {
            this._unmarkSquare(square);
        });

        this._markSquare(sourceSquare);
        this._markSquare(targetSquare);
    }

    _unmarkSquare(square) {
        square.setSelect(false);
    }

    _markSquare(square) {
        square.setSelect(true);
    }

    onReleased() {
        this._releaseSelectedPiece();
    }

    _releaseSelectedPiece() {
        let targetSquare = this.getTargetSquare();

        if (this.hasValidPiece()) {
            if (targetSquare) {
                if (targetSquare.piece) {
                    this.selectedPiece.resetPosition();
                } else {
                    this._movePieceTo(this.selectedPiece, targetSquare);
                }
            } else {
                this.selectedPiece.resetPosition();
            }
        } else if (this.selectedPiece) {
            this.selectedPiece.resetPosition();
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