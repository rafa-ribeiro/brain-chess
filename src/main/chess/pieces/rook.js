class Rook extends Piece {

    constructor(name, imgPiece, square, team) {
        super(name, imgPiece, square, team);
    }

    moves() {
        let currRow = this.square.rowIndex;
        let currCol = this.square.columnIndex;

        let steps = [];
        for (let col = 0; col < currCol; col++) {
            let step = {'row': currRow, 'col': col};
            steps.push(step);
        }

        for (let col = currCol + 1; col < 8; col++) {
            let step = {'row': currRow, 'col': col};
            steps.push(step);
        }

        for (let row = 0; row < currRow; row++) {
            let step = {'row': row, 'col': currCol};
            steps.push(step);
        }

        for (let row = currRow + 1; row < 8; row++) {
            let step = {'row': row, 'col': currCol};
            steps.push(step);
        }

        // console.log(steps);
        return steps;
    }

    posMoveTo() {
        this.hasMoved = true;
    }

    _getDirection() {
        return GAME_ORIENTATION == this.team ? -1 : 1;
    }

    atacks() {
        
    }

    getPathTo(targetSquare) {
        let path = []
        let sourceRow = this.square.rowIndex;
        let sourceCol = this.square.columnIndex;
        let targetRow = targetSquare.rowIndex;
        let targetCol = targetSquare.columnIndex;

        let minRowIdx = min(sourceRow, targetRow);
        let maxRowIdx = max(sourceRow, targetRow);

        let isSameCol = sourceCol == targetCol;
        let isSameRow = sourceRow == targetRow;

        if (isSameRow || isSameCol) {
            for (let i = minRowIdx; i <= maxRowIdx; i++) {
                let step = {'row': i, 'col': sourceCol};
                path.push(step);
            }
    
            let minColIdx = min(sourceCol, targetCol);
            let maxColIdx = max(sourceCol, targetCol);
    
            for (let i = minColIdx; i <= maxColIdx; i++) {
                let step = {'row': sourceRow, 'col': i};
                path.push(step);
            }

            path = path.filter(step => step.row != sourceRow || step.col != sourceCol);
        }
        return path;
    }

}