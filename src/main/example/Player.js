function Player(layer, startState) {
    this.color = color(100, 200, 54, 76);
    this.sprite = new Square(100, 100);
    this.state = startState;

    this.visible = true;
    this.updateCheck = true;

    layer.children.push(this);

    this.Draw = function () {
        if (this.visible) {
            this.sprite.Draw();
        }
    }

    this.Update = function () {
        if (this.updateCheck) {
            this[this.state](); // executando a function dentro do contexto this
        }
    }

    // State Functions
    this.MoveState = function () {
        this.sprite.xx++;
    }

    this.IdleState = function () {
        
    }
}