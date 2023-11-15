console.log("Testing");

let form = document.getElementById('login');
let b = document.getElementById('vButton');
let newAcc = document.getElementById('accCreation');
let login = document.getElementById('userLogin');
const username = [];
const pass = [];
function submitForm(form) {
        form.preventDefault();
}

form.addEventListener('submit', submitForm);

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
        let userEntry = document.getElementById('username').value;
        let passEntry = document.getElementById('password').value;
        let validUser = false;
        for (let i = 0; i < username.length; i++) {
                if (userEntry == username[i] &&
                    passEntry == pass[i]) {
                        validUser = true;
                    }
                }
                if (validUser == true) {
                        console.log("Successful login!");
                } else {
                        console.log("Invalid login.");
                        console.log(userEntry + "\n" + passEntry);
                }
});