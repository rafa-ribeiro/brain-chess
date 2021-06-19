class ChessEngine {

    constructor(chessboard) {
        this.chessboard = chessboard;
    }

    legalMoves(piece) {
        let targetSquares = {};
        if (piece) {
            targetSquares = this._getPieceMoves(piece);
            targetSquares = this._removeOccupiedSquares(piece, targetSquares);
            let targetAttacks = this._getPieceAttacks(piece);

            if (!piece.isJumpOverPiece()) {
                targetSquares = this._removeUnreachableSquares(piece, targetSquares);
                targetAttacks = this._removeUnreachableAttacks(piece, targetAttacks);
            }

            targetSquares = {
                ...targetSquares,
                ...targetAttacks,
            };

            console.log(piece.name + " attacks..");
            console.log(targetAttacks);
        }
        return targetSquares;
    }

    _removeOccupiedSquares(piece, targetSquares) {
        let filterSquares = {};
        Object.values(targetSquares).forEach(square => {
            if (square.isFree()) {
                filterSquares[square.name] = square;
            }
        });
        return filterSquares;
    }

    _getPieceMoves(piece) {
        let targetSquares = {};
        let possibleMoves = piece.moves();

        possibleMoves.forEach(possibleMove => {
            let optionSquare = this.chessboard.squares[possibleMove.row][possibleMove.col];
            targetSquares[optionSquare.name] = optionSquare;
        });

        return targetSquares;
    }

    _getPieceAttacks(piece) {
        let targetSquares = {};
        let possibleAttacks = piece.attacks();

        possibleAttacks.forEach(possibleAttack => {
            let optionSquare = this.chessboard.squares[possibleAttack.row][possibleAttack.col];

            let attackedPiece = optionSquare.piece;
            if (attackedPiece) {
                if (attackedPiece.team != piece.team) {
                    targetSquares[optionSquare.name] = optionSquare;
                }
            }
        });

        return targetSquares;
    }

    _removeUnreachableSquares(piece, targetSquares) {
        let reachableSquares = [];

        Object.values(targetSquares).forEach(square => {
            let hasPath = this._hasFreePathTo(piece, square);
            if (hasPath) {
                reachableSquares[square.name] = square;
            }
        });

        return reachableSquares;
    }

    _removeUnreachableAttacks(piece, targetSquares) {
        let reachableSquares = [];
        
        if (targetSquares) {
            Object.values(targetSquares).forEach(square => {
                let hasPath = this._hasAttackTo(piece, square);
                if (hasPath) {
                    reachableSquares[square.name] = square;
                }
            });
        }
        return reachableSquares;
    }

    _hasAttackTo(piece, targetSquare) {
        let path = piece.getPathToAttack(targetSquare);
        
        if (path.length == 1) {
            let firstStep = path[0];
            if (firstStep.row == targetSquare.row && firstStep.col == targetSquare.col) {
                return true;
            }
        }
        
        let squaresPath = [];
        path.forEach(step => {
            let stepSquare = this.chessboard.squares[step.row][step.col];

            if (stepSquare != targetSquare) {
                squaresPath.push(stepSquare);    
            }
        });

        let hasPath = squaresPath.every(square => square.isFree());
        return hasPath;
    }

    _hasFreePathTo(piece, targetSquare) {
        let path = piece.getPathTo(targetSquare);
        let squaresPath = [];
        path.forEach(step => {
            let stepSquare = this.chessboard.squares[step.row][step.col];

            if (stepSquare != targetSquare) {
                squaresPath.push(stepSquare);    
            }
        });

        let hasPath = squaresPath.every(square => square.isFree());
        return hasPath;
    }

}