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

    atacks() {
        
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

}