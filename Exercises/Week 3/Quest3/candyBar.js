console.log("Hello");

var c = Number(prompt("How many coupons do you have?"));
var cb = 0;
var cr = 0;
var g = 0;
var r = 0;

console.log("You have " + c + " coupons?");

if (c >= 10) {
    cb = c/10;
    cr = c%10;

    if (cr >= 3) {
        g = cr/3;
        r = cr%3;

        console.log("You'll have " + Math.floor(cb) + " candybars, " + Math.floor(g) + " gumballs, and " + r + " coupons remaining.");
    } else {
        console.log("You'll have " + Math.floor(cb) + " candybars, 0 gumballs, and " + cr + " coupons remaining.");
    }
} else {
    if (c >= 3){
        g = c/3;
        r = c%3;

        console.log("You'll have 0 candybars, " + Math.floor(g) + " gumballs, and " + r + " coupons remaining.");
    } else {
        console.log("You'll have 0 candybars, 0 gumballs, and " + c + " coupons remaining.");
    }
}