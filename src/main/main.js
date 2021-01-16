// Global variables

var objLayer;
var player;

var game;

var blackQueen;

var WIDTH = 600;
var HEIGHT = 600;


function setup() {
    var canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("gameArea");

    // objLayer = new ObjectLayer();
    // player = new Player(objLayer, "MoveState");

    game = new Game(WIDTH, HEIGHT);

    blackQueen = new Piece('Black Queen', blackQueenImg);
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
    game.draw();
}

function FixedUpdate() {

}

function Update() {
    // objLayer.Update();
}

function LatedUpdate() {

}

function Render() {
    // objLayer.Draw();

    blackQueen.draw();
}

function mousePressed() {
    game.clicked();
    blackQueen.onPressed();
}

function mouseDragged() {
    blackQueen.onDragged();
}

function mouseReleased() {
    blackQueen.onReleased();
}