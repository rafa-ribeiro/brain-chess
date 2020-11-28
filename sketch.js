import p5 from "./src/p5js/p5.min";
import Game from "./src/main/game";

const s = (sketch) => {

    let game;

    sketch.setup = () => {
        var canvas = sketch.createCanvas(800, 800);
        canvas.parent("gameArea");

        game = new Game(sketch, 800, 800);
    };

    sketch.draw = () => {
        sketch.background(51);
        game.draw();
    };

    sketch.mousePressed = () => {
        game.clicked();
    };
}

let myp5 = new p5(s);