class Queen extends Piece {
    constructor(name, imgPiece, square, team) {
        super(name, imgPiece, square, team);
    }

    moves() {
        // TODO: mover para um lugar genérico que possa ser utiliza pela Torre, Bispo e Rainha
        let rook = new Rook(this.name, this.imgPiece, this.square, this.team);
        let bishop = new Bishop(this.name, this.imgPiece, this.square, this.team);

        let rookMoves = rook.moves();
        let bishopMoves = bishop.moves();

        let moves = [];
        moves.push(...rookMoves);
        moves.push(...bishopMoves);
        return moves;
    }

    getPathTo(targetSquare) {
        let path = [];
        
        let rook = new Rook(this.name, this.imgPiece, this.square, this.team);
        let bishop = new Bishop(this.name, this.imgPiece, this.square, this.team);

        let rookPath = rook.getPathTo(targetSquare);
        let bishopPath = bishop.getPathTo(targetSquare);

        path.push(...rookPath);
        path.push(...bishopPath);
        return path;
    }
}