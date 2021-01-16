let xOffset = 0.0;
let yOffset = 0.0;

class Piece {

    constructor(name, imgPiece) {
        this.name = name;
        this.imgPiece = imgPiece;
        this.imgSize = 75;
        this.posX = 110;
        this.posY = 110;
        this.locked = false;
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
            console.log("Cliquei na Dama");
        } else {
            this.locked = false;
            console.log("Clique noutro lugar");
        }
        xOffset = mouseX - this.posX;
        yOffset = mouseY - this.posY;
    }

    onDragged() {
        if (this.locked) {
            this.posX = mouseX - xOffset;
            this.posY = mouseY - yOffset; 
        }
    }

    onReleased() {
        this.locked = false;
    }
}

