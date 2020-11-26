
import Chessboard from './board/chessboard';


export default class Game {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.chessboard = new Chessboard();
        this.chessboard.setup();
    }

    setup() {

    }

    draw(p5) {
        this.chessboard.draw(p5);
    }

}