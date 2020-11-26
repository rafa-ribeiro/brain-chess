


export default class Chessboard {

    constructor() {
        this.squares = [];
    }

    setup() {
        this.squares.push(new Square('a1', 0, 0, 255));
        this.squares.push(new Square('a2', 1, 0, 0));
    }

    draw(p5) {
        this.squares.forEach(square => {
            square.draw(p5);
        });
    }

}


export class Square {

    constructor(name, rowIndex, columnIndex, color) {
        this.name = name;
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        this.color = color;
    }

    draw(p5) {
        let squareSize = p5.width / 8;

        p5.square(this.rowIndex * squareSize, this.columnIndex * squareSize, squareSize);
        p5.fill(this.color);
    }

}