


class ChessEngine {

    constructor(chessboard) {
        this.chessboard = chessboard;
    }

    legalMoves(piece) {
        let targetSquares = {};
        if (piece) {
            targetSquares = this._getPieceMoves(piece);
            targetSquares = this._removeOccupiedSquares(targetSquares);
            if (!piece.isJumpOverPiece()) {
                targetSquares = this._removeUnreachableSquares(piece, targetSquares);
            }

            console.log("targetSquares");
            console.log(targetSquares);
        }
        return targetSquares;
    }

    _removeOccupiedSquares(targetSquares) {
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

    _removeUnreachableSquares(piece, targetSquares) {
        let reachableSquares = [];

    
        Object.values(targetSquares).forEach(square => {

            let hasPath = this._hasPath(piece, square);
            if (hasPath) {
                reachableSquares[square.name] = square;
                console.log("Tem caminho de " + piece.square.name + " até " + square.name);
            }
        });

        return reachableSquares;
    }

    _hasPath(piece, targetSquare) {
        let path = piece.getPathTo(targetSquare);

        let squaresPath = [];
        path.forEach(step => {
            let stepSquare = this.chessboard.squares[step.row][step.col];
            squaresPath.push(stepSquare);
        });

        let hasPath = squaresPath.every(square => square.isFree());
        return hasPath;
    }

}