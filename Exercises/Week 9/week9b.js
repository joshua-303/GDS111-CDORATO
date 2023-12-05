let b = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let i = 0; 

let diagonal;
let right;
let bottom;

while(i = 1){
    let incrementor;
    let num = Number(prompt("Where would you like to mark?"));
    bplace = num - 1;
    b[bplace] = "x";
    bplace % 2 == 0 ? diagonal = true : diagonal = false;
    bplace == 2 || bplace == 5 || bplace == 8 ? right = true : right = false;
    bplace == 6 || bplace == 7 || bplace == 8 ? bottom = true : bottom = false;
    console.log("Diagonal is " + diagonal + " Right is " + right + " Bottom is " + bottom);
    console.log(bplace);
    break;
}
