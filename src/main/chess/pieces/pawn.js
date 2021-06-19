class Pawn extends Piece {

    constructor(name, imgPiece, square, team) {
        super(name, imgPiece, square, team);
        this.hasMoved = false;
        this.type = PIECE_TYPE.PAWN;
    }

    moves() {
        let currRow = this.square.rowIndex;
        let currCol = this.square.columnIndex;
        let direction = this._getDirection();

        let steps = [];
        let step = {'row': currRow + 1 * direction, 'col': currCol};
        steps.push(step);

        if (!this.hasMoved) {
            step = {'row': currRow + 2 * direction, 'col': currCol};
            steps.push(step);
        }

        // console.log(steps);
        return steps;
    }

    _getDirection() {
        return GAME_ORIENTATION == this.team ? -1 : 1;
    }

    posMoveTo() {
        this.hasMoved = true;
    }

    attacks() {
        let currRow = this.square.rowIndex;
        let currCol = this.square.columnIndex;
        let direction = this._getDirection();

        let steps = [];
        steps.push({'row': currRow + 1 * direction, 'col': currCol - 1});
        steps.push({'row': currRow + 1 * direction, 'col': currCol + 1});
        steps = steps.filter(move => move.row >= 0 && move.row < 8 && move.col >= 0 && move.col < 8);
        return steps;
    }

    getPathTo(targetSquare) {
        let path = []
        let sourceRow = this.square.rowIndex;
        let sourceCol = this.square.columnIndex;
        let targetRow = targetSquare.rowIndex;

        let minRowIdx = min(sourceRow, targetRow);
        let maxRowIdx = max(sourceRow, targetRow);

        for (let i = minRowIdx; i <= maxRowIdx; i++) {
            let step = {'row': i, 'col': sourceCol};
            path.push(step);
        }

        let filterPath = path.filter(step => step.row != sourceRow || step.col != sourceCol);
        return filterPath;
    }

    getPathToAttack(targetSquare) {
        let path = []
        let sourceRow = this.square.rowIndex;
        let sourceCol = this.square.columnIndex;
        let targetRow = targetSquare.rowIndex;
        let targetCol = targetSquare.columnIndex;
        let deltaRow = targetRow - sourceRow;
        let deltaCol = targetCol - sourceCol;
        
        if (deltaCol == 1 && deltaRow == 1) {
            path.push({'row': targetRow, 'col': targetCol});
        }

        return path;
    }

}