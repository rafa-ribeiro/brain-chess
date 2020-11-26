

let chessboardCanvas = document.getElementById("chessboard");
let chessboardCtx = canvas.getContext("2d");

const BOARD_WIDTH = canvas.width;
const BOARD_HEIGHT = canvas.height;

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    
}