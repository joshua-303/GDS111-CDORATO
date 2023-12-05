let boardArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let i = 1;
let playerWin;
let compWin;
function playerMove() {
    return Number(prompt("Select a space to mark."));
}
function compRand() {
    return Math.floor(0+(8+0)*Math.random());
}
function checkPlayerWin() {
    if(boardArr[0] == "x" && boardArr[1] == "x" && boardArr [2] == "x"){
        playerWin = true;
    } else if (boardArr[0] == "x" && boardArr[4] == "x" && boardArr[8] == "x"){
        playerWin= true;
    } else if (boardArr[0] == "x" && boardArr[3] == "x" && boardArr[6] == "x"){
        playerWin = true;
    } else if (boardArr[3] == "x" && boardArr[4] == "x" && boardArr[5] == "x"){
        playerWin = true;
    } else if (boardArr[6] == "x" && boardArr[7] == "x" && boardArr[8] == "x"){
        playerWin = true;
    } else if (boardArr[1] == "x" && boardArr[4] == "x" && boardArr[7] == "x"){
        playerWin = true;
    } else if (boardArr[2] == "x" && boardArr[5] == "x" && boardArr[8] == "x"){
        playerWin = true;
    } else if (boardArr[2] == "x" && boardArr[4] == "x" && boardArr[6] == "x"){
        playerWin = true;
    }
}
function checkCompWin() {
    if(boardArr[0] == "o" && boardArr[1] == "o" && boardArr [2] == "o"){
        compWin = true;
    } else if (boardArr[0] == "o" && boardArr[4] == "o" && boardArr[8] == "o"){
        compWin= true;
    } else if (boardArr[0] == "o" && boardArr[3] == "o" && boardArr[6] == "o"){
        compWin = true;
    } else if (boardArr[3] == "o" && boardArr[4] == "o" && boardArr[5] == "o"){
        compWin = true;
    } else if (boardArr[6] == "o" && boardArr[7] == "o" && boardArr[8] == "o"){
        compWin = true;
    } else if (boardArr[1] == "o" && boardArr[4] == "o" && boardArr[7] == "o"){
        compWin = true;
    } else if (boardArr[2] == "o" && boardArr[5] == "o" && boardArr[8] == "o"){
        compWin = true;
    } else if (boardArr[2] == "o" && boardArr[4] == "o" && boardArr[6] == "o"){
        compWin = true;
    }
}

while (i > 0) {
    let num = playerMove();
    bPlace  = num - 1;
    if(boardArr[bPlace] == "x" || boardArr[bPlace] == "o") {
        console.log("Select another space.") 
        num = playerMove();
    } else {
        boardArr[bPlace] = "x";
    } 
    console.log(boardArr[0] + boardArr[1] + boardArr[2] + "\n" + boardArr[3] + boardArr[4] + boardArr[5] + "\n" + boardArr[6] + boardArr[7] + boardArr[8]);
    checkPlayerWin();
    compMove = compRand();
    while (i > 0) {
        if(boardArr[compMove] == "x" || boardArr[compMove] == "o") {
            compMove = compRand();
        } else {
            boardArr[compMove] = "o";
            break;
        }
    }
    console.log(boardArr[0] + boardArr[1] + boardArr[2] + "\n" + boardArr[3] + boardArr[4] + boardArr[5] + "\n" + boardArr[6] + boardArr[7] + boardArr[8]);
    checkCompWin();
    console.log("Computer marks " + compMove);
    if(playerWin == true) {
        console.log("Congratulations! You win!");
        break;
    } else if (compWin == true) {
        console.log("Too bad-- you've been had.");
        break;
    }
}