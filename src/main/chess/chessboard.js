
const DARK = function () { fill(118, 150, 86) };
const LIGHT = function () { fill(238, 238, 210) };

// const DARK = function () { fill(125, 135, 150) };
// const LIGHT = function() { fill(232, 235, 239) };

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
        this.squares = this.createChessboardMatrix('white');
        this.squaresList = this._setSquaresList();
        console.log(this.squares);
    }

    _setSquaresList() {
        let sqList = [];

        this.squares.forEach(boardRow => {
            boardRow.forEach(square => {
                sqList.push(square);
            });
        });

        return sqList;
    }

    draw() {
        this.squares.forEach(boardRow => {
            boardRow.forEach(square => {
                square.draw();
            });
        });
    }

    createChessboardMatrix(orientation) {
        let chessboard = [];

        for (let row = 0; row < 8; row++) {
            let line = []
            for (let col = 0; col < 8; col++) {
                let columnName = CORRESPONDING_LETTERS[col] + (row + 1);
                let color = (row + col) % 2 == 0 ? DARK : LIGHT;

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
        // width é variável do p5js
        this.dimension = width / 8;

        this.x = this.columnIndex * this.dimension;
        this.y = this.rowIndex * this.dimension;
        this.x2 = this.x + this.dimension;
        this.y2 = this.y + this.dimension;
        
        this.piece = null;
    }

    draw() {
        noStroke();
        this.color();
        square(this.x, this.y, this.dimension);

        if (this.columnIndex == 0 || this.rowIndex == 7) {
            fill(0);
            textSize(18);
            text(this.name, this.x, this.y, this.dimension, this.dimension);
        }
    }

    isOverSquare() {
        return mouseX > this.x && mouseX < this.x2 && mouseY > this.y && mouseY < this.y2;
    }

}
