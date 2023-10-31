//window.addEventListener('keydown', function doWhichKey(e) {
//    console.log(e.keyCode + " was pressed.");
//}, false);

function body() {
    let num = 0;
    while (num === 0) {
    console.log("1 - Load   2 - Save    3 - Play    4 - Help    5 - Quit    Make Selection");
    let a = prompt("Make selection.");

    if (a == null) {
        console.log("Game Over! Press Enter to open the menu again.");
        num++;
    } else {
        a = Number(a);
        if (a <= 0 || a >= 6 || isNaN(a)) {
            console.log(a + " Invalid entry.");
        } else if (a === 1) {
            console.log(a + " Loading game...");
        } else if (a === 2) {
            console.log(a + " Saving game...");
        } else if (a === 3) {
            console.log(a + " Let's play!");
        } else if (a === 4) {
            console.log(a + " Here's your help!");
        } else if (a === 5) {
            console.log(a + " Game Over! Press Enter to open the menu again.");
            num++
        }
    }
}
}

body();

//Calls menu when enter key is pressed
window.addEventListener('keydown', function doWhichKey(e) {
    if (e.keyCode == "13") {
        body();
    }
}, false);