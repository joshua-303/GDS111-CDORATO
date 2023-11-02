let card  = [];

console.log("Your opening hand: ");
for(let num = 0; num < 7; num++) {
    card.push(Math.floor(1 + (14-1) * Math.random()));
    console.log(card[num]);
}
console.log("Press enter to draw another card!");

function draw() {
    card.push(Math.floor(1 + (14-1) * Math.random()));
    console.log("You drew " + card[card.length - 1]);
}

window.addEventListener('keydown', function doWhichKey(e) {
    if (e.keyCode == "13") {
        draw();
    }
}, false);
