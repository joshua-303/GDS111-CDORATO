let start = Number(prompt("Enter a starting number:"));
let end = Number(prompt("Enter an ending number:"));
let string;
let fun = [];

for(i=start; i<end; i++){
    let isFizz;
    let isBuzz;

    if(i % 3 == 0){
        isFizz = "Fizz";
    } else {
        isFizz = "";
    }
    
    if(i % 5 == 0){
        isBuzz = "Buzz";
    } else {
        isBuzz = "";
    }

    if(isFizz == "Fizz" || isBuzz == "Buzz"){
        string = isFizz + isBuzz;
    } else {
        string = i;
    }

    fun.push(string);
}

for(a in fun){
    console.log(fun[a]);
}