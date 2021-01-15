
const BLACK = function () { fill(118,150,86) };
const WHITE = function() { fill(238,238,210) };

// const BLACK = function () { fill(125, 135, 150) };
// const WHITE = function() { fill(232, 235, 239) };

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

class Chessboard {

    constructor() {
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

                line.push(new Square(columnName, rowIndex, colIndex, color));
            }
            chessboard.splice(0, 0, line);
        }
        return chessboard;
    }
}


class Square {

    constructor(name, rowIndex, columnIndex, color) {
        this.name = name;
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        this.color = color;

        // this.squareSize = this.p5.width / 8;
        this.squareSize = width / 8;

        this.x = this.columnIndex * this.squareSize;
        this.y = this.rowIndex * this.squareSize;
        this.x2 = this.x + this.squareSize;
        this.y2 = this.y + this.squareSize;
    }

    draw() {
        // fill(this.color);
        noStroke();
        this.color();
        square(this.x, this.y, this.squareSize);

        fill(0);
        textSize(18);
        text(this.name, this.x, this.y, this.squareSize, this.squareSize);
    }

    clicked() {
        let isOverSquare = mouseX > this.x && mouseX < this.x2 && mouseY > this.y && mouseY < this.y2;
        if (isOverSquare) {
            console.log(this.name);
        }
    }

}
