var player, winner = null;
var playerSelected = document.getElementById('player-selected');
var winnerGame = document.getElementById('winner-game');
var squares = document.getElementsByClassName('square');

changePlayer('X');


function selectSquare(id){
    if (winner !== null) {
        return;
    }


    var square = document.getElementById(id);
    if(square.innerHTML !== '-') {
        return;
    }

    square.innerHTML = player;
    square.style.color = 'blue';

    if (player === 'X') {
        player = '0';
    }else {
        player = 'X';
    }

    changePlayer(player);
    lookWinner();

}

function changePlayer(valor) {
    player = valor;
    playerSelected.innerHTML = player;

}

function lookWinner() {
    var square1 = document.getElementById(1);
    var square2 = document.getElementById(2);
    var square3 = document.getElementById(3);
    var square4 = document.getElementById(4);
    var square5 = document.getElementById(5);
    var square6 = document.getElementById(6);
    var square7 = document.getElementById(7);
    var square8 = document.getElementById(8);
    var square9 = document.getElementById(9);

    if(lookSequence(square1, square2, square3)) {
        changeColorSquare(square1, square2, square3);
        changeWinner(square1);
        return;
    }

    if(lookSequence(square4, square5, square6)) {
        changeColorSquare(square4, square5, square6);
        changeWinner(square4);
        return;
    }

    if(lookSequence(square7, square8, square9)) {
        changeColorSquare(square7, square8, square9);
        changeWinner(square7);
        return;
    }

    if(lookSequence(square1, square4, square7)) {
        changeColorSquare(square1, square4, square7);
        changeWinner(square1);
        return;
    }

    if(lookSequence(square2, square5, square8)) {
        changeColorSquare(square2, square5, square8);
        changeWinner(square2);
        return;
    }

    if(lookSequence(square3, square6, square9)) {
        changeColorSquare(square3, square6, square9);
        changeWinner(square3);
        return;
    }

    if(lookSequence(square1, square5, square9)) {
        changeColorSquare(square1, square5, square9);
        changeWinner(square1);
        return;
    }

    if(lookSequence(square3, square5, square7)) {
        changeColorSquare(square3, square5, square7);
        changeWinner(square3);
    }


}

function changeWinner(square) {
    winner = square.innerHTML;
    winnerGame.innerHTML = winner;
}

function changeColorSquare(square1, square2, square3) {
    square1.style.background = '#00ff00';
    square2.style.background = '#00ff00';
    square3.style.background = '#00ff00';
}

function lookSequence(square1, square2, square3){
    var eigual = false;

    if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        eigual = true;
    }   

    return eigual;
}

function restart() {

    winner = null;
    winnerGame.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var square = document.getElementById(i);
        square.style.background = 'cyan';
        square.style.color = 'black';
        square.innerHTML = '-';
    }

    changePlayer('X');

}