console.log("Week3d running");
/*ADDING THIS COMMENT TO FIX COMMIT MESSAGE*/

console.log("<<< MAIN MENU >>>");
console.log("                 ");
console.log("<1> Instructions ");
console.log("<2> Play Game    ");
console.log("<3> Quit         ");
console.log("                 ")
console.log("Select a number: ");

var a = Number(prompt("Enter any value: "));
var b = Number(prompt("Now enter another: "));
var difference = 0;

if (a>b) {
    difference = a - b;
} else {
    difference = b - a;
}

console.log("The difference between these two values is " + difference);