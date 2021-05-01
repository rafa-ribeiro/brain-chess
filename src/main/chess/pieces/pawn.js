

class Pawn extends Piece {

    constructor(name, imgPiece, square, team) {
        super(name, imgPiece, square, team);
        this.hasMoved = false;
        this.type = PIECE_TYPE.PAWN;
    }

    moves() {
        let direction = this._getDirection();
        let possibleMoves = [1 * direction];
        if (!this.hasMoved) {
            possibleMoves.push(2 * direction);
        }
        return possibleMoves;
    }

    _getDirection() {
        return GAME_ORIENTATION == this.team ? -1 : 1;
    }

    posMoveTo() {
        this.hasMoved = true;
    }

    atacks() {
        
    }

}