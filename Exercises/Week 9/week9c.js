let startTTTBtnObj = document.getElementById("startTTT");

startTTTBtnObj.addEventListener("click", mainScript);

function mainScript() {

var ttt = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

function displayBoard() {
    console.log(ttt[0][0] + "|" + ttt[0][1] + "|" + ttt[0][2]);
    console.log(ttt[1][0] + "|" + ttt[1][1] + "|" + ttt[1][2]);
    console.log(ttt[2][0] + "|" + ttt[2][1] + "|" + ttt[2][2]);
}

function instructions() {
    console.log("\n-");
    console.log("Type the number for your move");
    console.log("|1, 2, 3|");
    console.log("|4, 5, 6|");
    console.log("|7, 8, 9|");
}

function placeChoice(choice, symbol) {
    let succeed;
    if (choice == 1) {
        if (ttt[0][0].trim().length == 0) {
            ttt[0][0] = symbol;
            succeed = true;
        }
    }
    if (choice == 2) {
        if (ttt[0][1].trim().length == 0) {
            ttt[0][1] = symbol;
            succeed = true;
        }
    }
    if (choice == 3) {
        if (ttt[0][2].trim().length == 0) {
            ttt[0][2] = symbol;
            succeed = true;
        }
    }
    if (choice == 4) {
        if (ttt[1][0].trim().length == 0) {
            ttt[1][0] = symbol;
            succeed = true;
        }
    }
    if (choice == 5) {
        if (ttt[1][1].trim().length == 0) {
            ttt[1][1] = symbol;
            succeed = true;
        }
    }
    if (choice == 6) {
        if (ttt[1][2].trim().length == 0) {
            ttt[1][2] = symbol;
            succeed = true;
        }
    }
    if (choice == 7) {
        if (ttt[2][0].trim().length == 0) {
            ttt[2][0] = symbol;
            succeed = true;
        }
    }
    if (choice == 8) {
        if (ttt[2][1].trim().length == 0) {
            ttt[2][1] = symbol;
            succeed = true;
        }
    }
    if (choice == 9) {
        if (ttt[2][2].trim().length == 0) {
            ttt[2][2] = symbol;
            succeed = true;
        }
    }
    return succeed;
}

function someoneWon(symbol) {
    let win = false;
    if (ttt[0][0] == symbol && ttt[0][1] == symbol && ttt[0][2] == symbol) {
        win = true;
    }
    if (ttt[1][0] == symbol && ttt[1][1] == symbol && ttt[1][2] == symbol) {
        win = true;
    }
    if (ttt[2][0] == symbol && ttt[2][1] == symbol && ttt[2][2] == symbol) {
        win = true;
    }
    if (ttt[0][0] == symbol && ttt[1][0] == symbol && ttt[2][0] == symbol) {
        win = true;
    }
    if (ttt[0][1] == symbol && ttt[1][1] == symbol && ttt[2][1] == symbol) {
        win = true;
    }
    if (ttt[0][2] == symbol && ttt[1][2] == symbol && ttt[2][2] == symbol) {
        win = true;
    }
    if (ttt[0][0] == symbol && ttt[1][1] == symbol && ttt[2][2] == symbol) {
        win = true;
    }
    if (ttt[0][2] == symbol && ttt[1][1] == symbol && ttt[2][0] == symbol) {
        win = true;
    }
    if (win) {
        return symbol;
    } else {
        return "?";
    }
}

function getRandomInt(min, max) {
    return Math.floor(min+(max-min)*Math.random());
}

let choice = 0;
let winnerSymbol = "";
let hasWon = false;
do {
    instructions();
    choice = Number(prompt("Enter a number of your choice:"));
    placeChoice(choice, "X");
    console.log("Human's Move:");
    displayBoard();
    winnerSymbol = someoneWon("X");
    if (winnerSymbol == "X") {
        console.log("Congratulations, you win!");
        break;
    } else if (winnerSymbol == "O") {
        console.log("Sorry, you lost.");
        break;
    }

    let succeed = false;
    do {
        choice = getRandomInt(1, 9);
        succeed = placeChoice(choice, "O");
    } while (!succeed);
    console.log("PC's Move:");
    displayBoard();
    winnerSymbol = someoneWon("O");
    if (winnerSymbol == "O") {
        console.log("Sorry, you lost.");
        break;
    } else if (winnerSymbol == "X") {
        console.log("Congratulations, you win!");
        break;
    }

} while (hasWon == false);
}
