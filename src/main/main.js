// Global variables
var objLayer;
var player;

var game;

var WIDTH = 600;
var HEIGHT = 600;

function setup() {
    var canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("gameArea");

    game = new Game(WIDTH, HEIGHT);
}

function draw() {
    StaticRender();

    FixedUpdate(); // physics
    Update(); // game logic
    LatedUpdate(); // after movement stuff
    
    Render();
}

// User defined functions
function StaticRender() {
    game.drawChessboard();
}

function FixedUpdate() {

}

function Update() {
    // ilumina o square conforme movimento do mouse
    game.updateActiveSquare();
}

function LatedUpdate() {

}

function Render() {
    // objLayer.Draw();

    game.drawPieces();
}

function mousePressed() {
    game.onPressed();
}

function mouseDragged() {
    game.onDragged();
}

function mouseReleased() {
    game.onReleased();
}