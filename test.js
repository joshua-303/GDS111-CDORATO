console.log("Testing");

let b = document.querySelector('button');
let newAcc = document.querySelector('accCreation');
const username = [];
const pass = [];

b.addEventListener('click', function() {
       /* var vergil = prompt("PUT A NUMBER");
        console.log(vergil); */
        let yn = confirm("THIS IS SENDING YOU TO DEVIL MAY CRY.\nDO YOU ACCEPT?");

        if (yn === true) {
                window.location.href = 'https://www.devilmaycry.com/en/';
        }
});

newAcc.addEventListener(click, function() {
        let newUser = prompt("Enter a username.");
        let newPass = prompt("Enter a password.");
        if (username.every(newUser)) {
                alert("This username is already taken.");
        } else {
                username.push(newUser);
                pass.push(newPass);
        }
})