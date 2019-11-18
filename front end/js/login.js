function checkUser() {
    fetch("http://localhost:8080/players/get/all")
        .then(res => res.json())
        .then(json => checkUsername(json));
}

function checkUsername(data) {
    let usernameexists = false;
    let userexists = false;
    let usernameinput = document.getElementById("inputusername");
    let passwordinput = document.getElementById("inputPassword");
    for (let player of data) {
        if (player.username === usernameinput.value) {
            userexists = true;
            usernameexists = true;
        } else {
            userexists = false;
        }
        if (userexists === true) {
            if (player.password === passwordinput.value) {
                sessionStorage.playername = usernameinput.value;
                window.location.href = "./profile.html";
            } else {
                alert('incorrect password');
            }
        }

    }
    if (usernameexists === false) {
        alert('username does not exist');
    }
}