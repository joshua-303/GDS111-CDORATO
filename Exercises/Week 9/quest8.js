let credits = 1000;
let bet = 150;
let results = [
    ["apple", "orange", "grapes", "strawberry"],
    [100, 75, 50, 25]
];

function randGen(min, max) {
    return Math.floor(min+(max-min)*Math.random());
}

function spin() {
    let resultOne = randGen(0, 3);
    let resultTwo = randGen(0, 3);
    let resultThree = randGen(0, 3);
    let resultFour = randGen(0, 3);
    let winnerPaid = results[1][resultOne] + results[1][resultTwo] + results[1][resultThree] + results[1][resultFour];
    if (credits > 0) {
        credits -= bet;
        credits += winnerPaid;
        console.log("[" + results[0][resultOne] + "] [" + results[0][resultTwo] + "] [" + results[0][resultThree] + "] [" + results[0][resultFour] + "]");
        console.log("Winnings = " + winnerPaid + "$\nYour new credit total is " + credits + ".\nWould you like to spin again?\n<1> Spin\n<2> Quit");
    } else {
        console.log("Unfortunately, you have no credits with which to play.");
    }
 }

 document.addEventListener('keydown', (e) => {
    if (e.key == "1") {
        spin();
    }
    if (credits > 0) {
        if (e.key == "2") {
            credits = 0;
            console.log("Then I will relieve you of your credits.\nHave a wonderful evening.");
        }
    }
 });

 console.log("You have " + credits + " credits. The starting bet is " + bet + ".\nWould you like to play slots?\n<1> Spin\n<2> Quit");
