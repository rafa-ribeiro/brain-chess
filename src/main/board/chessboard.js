
const BLACK = 0;
const WHITE = 255;

const LETTERS_CORRESPONDING = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h'
}

export default class Chessboard {

    constructor() {
        this.squares = [];
    }

    setup() {
        this.squares = crateChessboardMatrix();
        console.log(this.squares);
    }

    draw(p5) {
        this.squares.forEach(boardRow => {
            boardRow.forEach(square => {
                square.draw(p5);
            });
        });
    }

}

function crateChessboardMatrix() {
    let chessboard = [];

    for (let row = 0; row < 8; row++) {
        let line = []
        for (let col = 0; col < 8; col++) {
            let columnName = LETTERS_CORRESPONDING[col] + (row + 1);
            let color = (row + col) % 2 == 0 ? BLACK : WHITE;

            let rowIndex = 8 - 1 - row;
            line.push(new Square(columnName, rowIndex, col, color));
        }
        chessboard.push(line);
    }

    return chessboard;
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
        
        let x = this.columnIndex * squareSize;
        let y = this.rowIndex * squareSize;

        p5.fill(this.color);
        p5.square(x, y, squareSize);

        p5.fill(153);
        p5.textSize(18);
        p5.text(this.name, x, y, squareSize, squareSize);
    }
}

Square.prototype.toString = function() {
    return this.name;
}