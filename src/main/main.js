// Global variables

var objLayer;
var player;


function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("gameArea");

    // game = new Game(sketch, 800, 800);

    objLayer = new ObjectLayer();
    player = new Player(objLayer, "MoveState");
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
    background(0);
}

function FixedUpdate() {

}

function Update() {
    objLayer.Update();
}

function LatedUpdate() {

}

function Render() {
    objLayer.Draw();
}