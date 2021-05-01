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

PIECES_BLACK_ORIENTATION = [
    ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR'],
    ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
    ['__', '__', '__', '__', '__', '__', '__', '__'],
    ['__', '__', '__', '__', '__', '__', '__', '__'],
    ['__', '__', '__', '__', '__', '__', '__', '__'],
    ['__', '__', '__', '__', '__', '__', '__', '__'],
    ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
    ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR']
];

var boardTemplate = GAME_ORIENTATION == teams.WHITE ? PIECES_WHITE_ORIENTATION : PIECES_BLACK_ORIENTATION;

const PIECE_TYPE = Object.freeze({
    PAWN: {Piece: Pawn},
});

const piecesTypeById = {
    'P': PIECE_TYPE.PAWN,
}

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
                    let team = _getTeam(pieceId);
                    let piece = createPiece(pieceId, pieceImg, square, team);
                    pieces.push(piece);
                }
            });
        });
        return pieces;
    }
}

function _getTeam(pieceId) {
    return pieceId[0] == 'w' ? teams.WHITE : teams.BLACK;
}

function createPiece(pieceId, pieceImg, square, team) {
    let pieceType = _getPieceType(pieceId);
    if (pieceType) {
        return new pieceType.Piece(pieceId, pieceImg, square, team);
    }
    return new Piece(pieceId, pieceImg, square, team);
}

function _getPieceType(pieceId) {
    let pieceTypeId = pieceId[1];
    let pieceType = piecesTypeById[pieceTypeId];
    if (pieceType) {
        return pieceType;
    }
    return null;
}
