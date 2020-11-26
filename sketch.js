import p5 from "./src/p5js/p5";
import Game from "./src/main/game";

const s = (sketch) => {
    sketch.setup = () => {
        var canvas = sketch.createCanvas(800, 800);
        canvas.parent("gameArea");

        sketch.game = new Game(800, 800);
    };

    sketch.draw = () => {
        sketch.background(51);
        sketch.game.draw(sketch);
    };
}

let myp5 = new p5(s);
