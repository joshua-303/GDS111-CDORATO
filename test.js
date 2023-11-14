console.log("Testing");

let b = document.querySelector('button');
let newAcc = document.getElementById('accCreation');
let login = document.getElementById('userLogin');
let userEntry = document.getElementById('username');
let passEntry = document.getElementById('password');
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

newAcc.addEventListener('click', function() {
        let i = 0;
        while(i === 0) {
                let newUser = prompt("Enter a username.");
                if (newUser == null) {
                        console.log("Operation canceled by user.")
                        break;
                }
                if (username == newUser) {
                        alert("This username is already taken.");
                } else {
                        let newPass = prompt("Enter a password.");
                        pass.push(newPass);
                        username.push(newUser);
                        console.log(username[username.length - 1] + "\n" + pass[pass.length - 1]);
                        break;
                }
        }
});

login.addEventListener('click', function() {
        for (i in username) {
                let validUser = false;
                if (userEntry == username[i] &&
                passEntry == pass[i]) {
                        validUser = true;
                }
                if (validUser == true) {
                        
                }
        }
})