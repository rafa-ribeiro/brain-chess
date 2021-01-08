function Square(xx, yy) {
    this.xx = xx;
    this.yy = yy;

    this.color = color(100, 200, 54, 76);
    this.ww = 50;
    this.hh = 75;
    
    this.Draw = function() {
        fill(this.color);
        noStroke();
        rect(this.xx, this.yy, this.ww, this.hh);
    }


}