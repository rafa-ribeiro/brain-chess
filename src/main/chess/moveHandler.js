class MoveHandler {

    constructor(chessboard, pieces, chessEngine) {
        this.chessboard = chessboard;
        this.pieces = pieces;
        this.chessEngine = chessEngine;
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
                this._unsetCandidatesTargets(this.chessboard.squaresList);
                this._setSelectedPiece();
            } else {
                this._handlePieceMove();
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
        this._handlePieceMove();
    }

    _handlePieceMove() {
        if (this.hasValidPiece()) {
            let targetSquare = this.getTargetSquare();
            let squaresOptions = this.chessEngine.legalMoves(this.selectedPiece);
            this._setCandidatesTargets(squaresOptions);
            targetSquare = squaresOptions[targetSquare.name];

            if (targetSquare) {
                if (targetSquare.piece) {
                    this.selectedPiece.resetPosition();
                } else {
                    this._movePieceTo(this.selectedPiece, targetSquare);
                    this._unsetCandidatesTargets(Object.values(squaresOptions));
                }
            } else {
                this.selectedPiece.resetPosition();
            }
        } else if (this.selectedPiece) {
            this.selectedPiece.resetPosition();
        }
    }

    _setCandidatesTargets(targetSquares) {
        Object.values(targetSquares).forEach(square => square.setCandidateTarget(true));
    }

    _unsetCandidatesTargets(targetSquares) {
        targetSquares.forEach(square => square.setCandidateTarget(false));
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