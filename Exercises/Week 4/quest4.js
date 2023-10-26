 for (let num = 0; num < 6; num++) {
    let age  = prompt("What is your age?");

    if (age == null) {
        console.log("Exit");
        num = 6;
    } else {
       age = Number(age);
    }

    if (age == "" || isNaN(age)){
        alert("Illegal entry. Please enter a number.");
        num--;
    } else if (age >= 65) {
       console.log("Senior");
    } else if (age >= 18) {
        console.log("Neither a senior nor a minor");
    } else if (typeof age === "number") {
        console.log("Minor");
    }
}

//a = Number(prompt("Hi"));
//if (isNaN(a)) {
//    alert("Illegal entry. Input a number.");
//} else {
//    console.log("True");
//}