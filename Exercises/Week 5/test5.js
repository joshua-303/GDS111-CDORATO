let num = [];
function randNum(a, b) {
 return  Math.floor(a + (b-a) * Math.random());
}
num.push(randNum(1, 10));
console.log("Your number is " + num[num.length-1]);
