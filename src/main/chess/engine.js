


class ChessEngine {

    constructor(chessboard) {
        this.chessboard = chessboard;
    }

    legalMoves(piece) {
        let targetSquares = {};
        if (piece) {
            targetSquares = this._getPieceMoves(piece);
            targetSquares = this._removeOccupiedSquares(targetSquares);

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
        let sourceSquare = piece.square;
        let possibleMoves = piece.moves();

        possibleMoves.forEach(possibleMove => {

            let newRowIdx = sourceSquare.rowIndex + possibleMove;
            let optionSquare = this.chessboard.squares[newRowIdx][sourceSquare.columnIndex];

            targetSquares[optionSquare.name] = optionSquare;
        });

        return targetSquares;
    }

}