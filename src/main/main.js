// Global variables

var objLayer;
var player;

var game;

var blackQueen;


function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("gameArea");

    // objLayer = new ObjectLayer();
    // player = new Player(objLayer, "MoveState");

    game = new Game(800, 800);

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