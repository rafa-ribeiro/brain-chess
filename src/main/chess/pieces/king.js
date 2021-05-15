class King extends Piece {

    constructor(name, imgPiece, square, team) {
        super(name, imgPiece, square, team);
        this.hasMoved = false;
    }

    moves() {
        let currRow = this.square.rowIndex;
        let currCol = this.square.columnIndex;

        let moves = [];

        moves.push({'row': currRow, 'col': currCol + 1});
        moves.push({'row': currRow + 1, 'col': currCol + 1});
        moves.push({'row': currRow - 1, 'col': currCol + 1});

        moves.push({'row': currRow, 'col': currCol - 1});
        moves.push({'row': currRow + 1, 'col': currCol - 1});
        moves.push({'row': currRow - 1, 'col': currCol - 1});

        moves.push({'row': currRow - 1, 'col': currCol});
        moves.push({'row': currRow - 1, 'col': currCol - 1});
        moves.push({'row': currRow - 1, 'col': currCol + 1});

        moves.push({'row': currRow + 1, 'col': currCol});
        moves.push({'row': currRow + 1, 'col': currCol - 1});
        moves.push({'row': currRow + 1, 'col': currCol + 1});

        moves = moves.filter(move => move.row >= 0 && move.row < 8 && move.col >= 0 && move.col < 8);

        return moves;
    }

    posMoveTo() {
        this.hasMoved = true;
    }

    atacks() {
        
    }

    getPathTo(targetSquare) {
        let path = []
        let sourceRow = this.square.rowIndex;
        let sourceCol = this.square.columnIndex;
        let targetRow = targetSquare.rowIndex;
        let targetCol = targetSquare.columnIndex;

        let rowDistance = Math.abs(sourceRow - targetRow);
        let colDistance = Math.abs(sourceCol - targetCol);

        if (rowDistance <= 1 && colDistance <= 1) {
            let step = {'row': targetRow, 'col': targetCol};
            path.push(step);
        }
        
        return path;
    }

}