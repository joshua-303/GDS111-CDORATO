var rand = [];
for(let num = 0; num < 6; num++) {
    rand.push(Math.floor(1 + (50-1) * Math.random()));
    console.log(rand[num]);
}