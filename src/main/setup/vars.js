
let PIECES_IMG = [];

const teams = Object.freeze({
    WHITE: 0, BLACK: 1
});

let GAME_ORIENTATION = teams.WHITE;

const GAME_STATE = Object.freeze({
    WHITE_TURN: {team: teams.WHITE, next: nextTurn},
    BLACK_TURN: {team: teams.BLACK, next: nextTurn},
});

TURNS = [GAME_STATE.WHITE_TURN, GAME_STATE.BLACK_TURN];
let idxTurn = 0;
let CURRENT_TURN = TURNS[idxTurn];

function nextTurn() {
    idxTurn = (idxTurn + 1) % TURNS.length;
    CURRENT_TURN = TURNS[idxTurn];
}

