

PIECES_WHITE_ORIENTATION = [
    ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
    ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
    ['__', '__', '__', '__', '__', '__', '__', '__'],
    ['__', '__', '__', '__', '__', '__', '__', '__'],
    ['__', '__', '__', '__', '__', '__', '__', '__'],
    ['__', '__', '__', '__', '__', '__', '__', '__'],
    ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
    ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
];

var boardTemplate = PIECES_WHITE_ORIENTATION;

class BoardMounter {

    static mount(chessboard) {
        let pieces = [];

        chessboard.squares.forEach(squaresRow => {
            squaresRow.forEach(square => {
                let rowIdx = square.rowIndex;
                let colIdx = square.columnIndex;

                let pieceId = boardTemplate[rowIdx][colIdx];
                let pieceImg = PIECES_IMG[pieceId];
                if (pieceImg) {
                    let piece = new Piece(pieceId, pieceImg, square);
                    pieces.push(piece);
                }
            });
        });

        console.log(pieces);

        return pieces;
    }
}
