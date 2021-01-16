
var piecesIds = ['bB', 'bK', 'bN', 'bP', 'bQ', 'bR', 'wB', 'wK', 'wN', 'wP', 'wQ', 'wR'];

var baseUrl = "https://raw.githubusercontent.com/rafa-ribeiro/brain-chess/9364fd2dc8ee43fc6584b884eaed0b80bb77680c/resources/img/pieces/";

function preload() {
    piecesIds.forEach(pieceId => {
        PIECES_IMG[pieceId] = loadImage(baseUrl + pieceId + '.svg')
    });
}