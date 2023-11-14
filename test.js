console.log("Testing");

let b = document.querySelector('button');
let newAcc = document.getElementById('accCreation').name;
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
        let i = 0;
        while(i == 0) {
                let newUser = prompt("Enter a username.");
                if (username.every(newUser)) {
                alert("This username is already taken.");
                } else {
                        let newPass = prompt("Enter a password.");
                        pass.push(newPass);
                        username.push(newUser);
                        break;
                }
        }
});