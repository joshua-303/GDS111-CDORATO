const playerArr = ["Mario", "Luigi", "Peach"];
const pwdArr = ["diamond", "emerald", "gold"];

let playerID = prompt("Enter your username: ");
let password = prompt("Enter your password: ");

let validUser = false;
for (let i = 0; i < playerArr.length; i++) {
    if (playerID == playerArr[i] &&
        password == pwdArr[i]) {
            validUser = true;
        }
} 

if (validUser == true) {
    console.log("Login successful! Welcome to the game!");
} else {
    console.log("Invalid login. Try again.");
}
