let fName = "Larry";
let age = 22;
let salary = 40000.00;
let employed = true;

console.log(fName + " is " + age + " years old.");
console.log("He is making " + salary + " annually.");
console.log(typeof fName);
console.log(typeof age);
console.log(typeof salary);
console.log(typeof employed);

fName = 77;
console.log("fName = " + fName);
console.log(typeof fName);

const player = ["Jeff", "Joshua", "Omar", "John"];
console.log("Their name is " + player[0]);

for (const [index, name] of player.entries()) {
    console.log(index, name);
}