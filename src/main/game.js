import Chessboard from './chess/chessboard';

export default class Game {

    constructor(p5, width, height) {
        this.p5 = p5;
        this.width = width;
        this.height = height;
        this.chessboard = new Chessboard(this.p5);
        this.chessboard.setup();
    }

    setup() {

    }

    draw() {
        this.chessboard.draw();
    }

    clicked() {
        let isOverChessboard = this.p5.mouseX > 0 && this.p5.mouseX < this.width && this.p5.mouseY > 0 && this.p5.mouseY < this.height;

        if (isOverChessboard) {
            this.chessboard.clicked();
        }
    }

}