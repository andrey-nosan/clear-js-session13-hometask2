var btn = document.getElementById("play");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var result = document.getElementById("result");

//game mapping
var playerMap = {1:'первый', 2:'второй'};
var resultMap = {1:'камень', 2:'ножницы', 3:'бумага'};

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}

function runGame() {
    var playerRes1 = getPlayerResult();
    var playerRes2 = getPlayerResult();
    
    player1.innerHTML = getNameById(playerRes1);
    player2.innerHTML = getNameById(playerRes2);

    winnerNumber = determineWinner2(playerRes1, playerRes2);
    printResult(winnerNumber);
}

function getNameById(id) {
    return resultMap[id];
}

function determineWinner(playerRes1, playerRes2) {
    var tempDif = playerRes1 - playerRes2;
    var winnerNumber = 0;   //default result
        switch (tempDif) {
        case -1 :
        case 2 :
            winnerNumber = 1;
            break;
        case 1 :
        case -2 :
            winnerNumber = 2;
            break;
    }
    return winnerNumber;
}

//alternative determination
function determineWinner2(playerRes1, playerRes2) {
    var tempDif = playerRes1 - playerRes2;
    
    if (0 > tempDif) {
        return Math.abs(tempDif);
    } else if (0 < tempDif) {
        return 2/tempDif;
    } else {
        return tempDif;
    }
}

function printResult(winnerNumber) {
    if (0 == winnerNumber) {
        result.innerHTML = "Ничья";
    } else {
        result.innerHTML = "Выиграл " + playerMap[winnerNumber] + " игрок";
    }
}

btn.addEventListener("click", runGame);