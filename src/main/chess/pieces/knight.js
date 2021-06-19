class Knight extends Piece {

    constructor(name, imgPiece, square, team) {
        super(name, imgPiece, square, team);
        this.jumpOver = true;
    }

    moves() {
        let currRow = this.square.rowIndex;
        let currCol = this.square.columnIndex;

        let moves = [];
        
        let changeCol = currCol + 2;
        let changeRow = currRow - 1;
        moves.push({'row': changeRow, 'col': changeCol});
        changeRow = currRow + 1
        moves.push({'row': changeRow, 'col': changeCol});

        changeRow = currRow + 2;
        changeCol = currCol + 1;
        moves.push({'row': changeRow, 'col': changeCol});
        changeCol = currCol - 1;
        moves.push({'row': changeRow, 'col': changeCol});

        changeCol = currCol - 2;
        changeRow = currRow + 1;
        moves.push({'row': changeRow, 'col': changeCol});
        changeRow = currRow - 1;
        moves.push({'row': changeRow, 'col': changeCol});

        changeRow = currRow - 2;
        changeCol = currCol - 1;
        moves.push({'row': changeRow, 'col': changeCol});
        changeCol = currCol + 1;
        moves.push({'row': changeRow, 'col': changeCol});

        moves = moves.filter(move => move.row >= 0 && move.row < 8 && move.col >= 0 && move.col < 8);
        
        return moves;
    }

}