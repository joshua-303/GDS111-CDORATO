console.log("Testing");

var b = document.querySelector('button');

b.addEventListener('click', function() {
       /* var vergil = prompt("PUT A NUMBER");
        console.log(vergil); */
        let yn = confirm("THIS IS SENDING YOU TO DEVIL MAY CRY.\nDO YOU ACCEPT?");

        if (yn === true) {
                window.location.href = 'https://www.devilmaycry.com/en/';
        }
});