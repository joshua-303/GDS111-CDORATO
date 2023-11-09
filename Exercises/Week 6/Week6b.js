myFunction();
func2(7);
let twiceNum = doubleIt(5);
let msg = message();
console.log(msg);
console.log("Function doubleIt() returns = " + twiceNum);

function myFunction() {
    console.log("I'm inside myFunction()");
}

function func2(p1) {
    console.log(p1);
    console.log("Inside func2");
}

function doubleIt(num1) {
    let d = num1 * 2;
    return d;
}

function message() {
    return "This is a message";
}