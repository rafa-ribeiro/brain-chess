class Piece {

    constructor(name, imgPiece, square, team) {
        this.name = name;
        this.imgPiece = imgPiece;
        this.square = square;
        this.imgSize = this.square.dimension;

        this.initialPosX = this.square.x;
        this.initialPosY = this.square.y;

        this.posX = this.square.x;
        this.posY = this.square.y;
        this.locked = false;

        this.xOffset = 0.0;
        this.yOffset = 0.0;

        this.team = team;
        this.square.piece = this;
    }

    draw() {
        image(this.imgPiece, this.posX, this.posY, this.imgSize, this.imgSize);
    }

    isOver() {
        if (mouseX > this.posX && mouseX < this.posX + this.imgSize &&
            mouseY > this.posY && mouseY < this.posY + this.imgSize) {
            return true;
        } else {
            return false;
        }
    }

    onPressed() {
        if (this.isOver()) {
            this.locked = true;
        } else {
            this.locked = false;
        }
        this.xOffset = mouseX - this.posX;
        this.yOffset = mouseY - this.posY;
    }

    onDragged() {
        if (this.locked) {
            this.posX = mouseX - this.xOffset;
            this.posY = mouseY - this.yOffset; 
        }
    }

    onReleased() {
        this.locked = false;
    }

    moveTo(targetSquare) {
        this.clearSquare();

        this.square = targetSquare;
        this.initialPosX = this.square.x;
        this.initialPosY = this.square.y;
        this.posX = this.square.x;
        this.posY = this.square.y;

        this.square.piece = this;
    }

    clearSquare() {
        this.square.piece = null;
    }

    resetPosition() {
        this.posX = this.initialPosX;
        this.posY = this.initialPosY;
    }
}