let secret = Math.floor(1 + (100-1) * Math.random());
let pGuesses;
for (pGuesses = 0; pGuesses < 10; pGuesses++) {
    if (pGuesses >= 5) {
        console.log("Sorry, you've used all of your attempts. You lose.");
        break;
    }
    let pInput = prompt("Guess a number between 1 and 100! You've got 5 attempts!");
    if (pInput == null) {
        break;
    }
    while (pInput < 1 || pInput > 100 || isNaN(pInput)) {
        pInput = prompt("That's not a valid entry... Guess a number between 1 and 100!");
    }
    Number(pInput);
    console.log(pInput);
    if (pInput == secret) {
        console.log("Congratulations, you won! The number was " + secret + "! You guessed correctly in " + pGuesses + " tries!");
        break;
    } else if (pInput > secret) {
        console.log("Your guess is too high, try again.");
    } else {
        console.log("Your guess is too low, try again.");
    }
}