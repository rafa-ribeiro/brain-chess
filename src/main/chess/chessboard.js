
const BLACK = 0;
const WHITE = 255;

const CORRESPONDING_LETTERS = {
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

    constructor(p5) {
        this.p5 = p5;
        this.squares = [];
    }

    setup() {
        this.squares = this.createChessboardMatrix('white');
        console.log(this.squares);
    }

    draw() {
        this.squares.forEach(boardRow => {
            boardRow.forEach(square => {
                square.draw();
            });
        });
    }

    clicked() {
        this.squares.forEach(boardRow => {
            boardRow.forEach(square => {
                square.clicked();
            });
        });
    }

    createChessboardMatrix(orientation) {
        let chessboard = [];
    
        for (let row = 0; row < 8; row++) {
            let line = []
            for (let col = 0; col < 8; col++) {
                let columnName = CORRESPONDING_LETTERS[col] + (row + 1);
                let color = (row + col) % 2 == 0 ? BLACK : WHITE;
    
                let rowIndex = row;
                let colIndex = col;
                if (orientation == 'white') {
                    rowIndex = 8 - 1 - row;    
                } else {
                    colIndex = 8 - 1 - col;
                }
    
                line.push(new Square(this.p5, columnName, rowIndex, colIndex, color));
            }
            chessboard.splice(0, 0, line);
        }
        return chessboard;
    }
}


export class Square {

    constructor(p5, name, rowIndex, columnIndex, color) {
        this.p5 = p5;
        this.name = name;
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        this.color = color;

        this.squareSize = this.p5.width / 8;
        this.x = this.columnIndex * this.squareSize;
        this.y = this.rowIndex * this.squareSize;
        this.x2 = this.x + this.squareSize;
        this.y2 = this.y + this.squareSize;
    }

    draw() {
        this.p5.fill(this.color);
        this.p5.square(this.x, this.y, this.squareSize);

        this.p5.fill(153);
        this.p5.textSize(18);
        this.p5.text(this.name, this.x, this.y, this.squareSize, this.squareSize);
    }

    clicked() { 
        let isOverSquare = this.p5.mouseX > this.x && this.p5.mouseX < this.x2 && this.p5.mouseY > this.y && this.p5.mouseY < this.y2;
        if (isOverSquare) {
            console.log(this.name);
        }
    }
}

Square.prototype.toString = function() {
    return this.name;
}