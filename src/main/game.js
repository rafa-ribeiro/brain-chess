// import Chessboard from './chess/chessboard';

class Game {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.chessboard = new Chessboard();
        this.chessboard.setup();
    }

    setup() {

    }

    draw() {
        this.chessboard.draw();
    }

    clicked() {
        let isOverChessboard = mouseX > 0 && mouseX < this.width && mouseY > 0 && mouseY < this.height;

        if (isOverChessboard) {
            this.chessboard.clicked();
        }
    }

}