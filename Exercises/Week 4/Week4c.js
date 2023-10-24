for (let  i = 0; i < 5; i++) {
    console.log("Are we there yet?");
}

let text = "";
let i = 0;
do {
    text = text + i + "<br>";
    i++;
}
while (i < 5) {
    console.log(text);
}

let j = 0;
while (j < 3) {
    console.log("The number is " + j);
    j++;
}