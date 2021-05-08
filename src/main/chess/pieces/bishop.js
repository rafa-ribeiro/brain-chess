class Bishop extends Piece {

    constructor(name, imgPiece, square, team) {
        super(name, imgPiece, square, team);
    }

    moves() {
        let currRow = this.square.rowIndex;
        let currCol = this.square.columnIndex;

        let moves = [];

        let row = currRow + 1;
        let col = currCol + 1;
        while (row < 8 && col < 8) {
            moves.push({'row': row, 'col': col});
            row++;
            col++;
        }

        row = currRow - 1;
        col = currCol + 1;
        while (row >= 0 && col < 8) {
            moves.push({'row': row, 'col': col});
            row--;
            col++;
        }

        row = currRow + 1;
        col = currCol - 1;
        while (row < 8 && col >= 0) {
            moves.push({'row': row, 'col': col});
            row++;
            col--;
        }
        
        row = currRow - 1;
        col = currCol - 1;
        while (row >= 0 && col >= 0) {
            moves.push({'row': row, 'col': col});
            row--;
            col--;
        }

        return moves;
    }

    getPathTo(targetSquare) {
        let path = []
        let sourceRow = this.square.rowIndex;
        let sourceCol = this.square.columnIndex;
        let targetRow = targetSquare.rowIndex;
        let targetCol = targetSquare.columnIndex;

        let rowPath = this.range(sourceRow, targetRow);
        let colPath = this.range(sourceCol, targetCol);

        for (let i = 0; i < rowPath.length; i++) {
            let row = rowPath[i];
            let col = colPath[i];
            let step = {'row': row, 'col': col};
            path.push(step);
        }

        let filterPath = path.filter(step => step.row != sourceRow || step.col != sourceCol);
        return filterPath;
    }

    range(start, end) {
        let values = [];
        if (start < end) {
            for (let i = start; i <= end; i++) {
                values.push(i);
            }
        } else if (start > end) {
            for (let i = start; i >= end; i--) {
                values.push(i);
            }
        }
        return values;
    }

}