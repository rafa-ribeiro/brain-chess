function ObjectLayer() {
    this.children = [];

    this.Draw = function () {
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].Draw();
        }
    }

    this.Update = function () {
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].Update();
        }
    }
}