function registerUser() {
    fetch("http://localhost:8080/players/get/all")
        .then(res => res.json())
        .then(json => checkUsername(json));
}

function checkUsername(data) {
    let exists = false;
    let usernameinput = document.getElementById("inputusername");
    for (let player of data) {
        if (player.username === usernameinput.value) {
            exists = true
        }

    }
    if (exists === true) {
        alert("Username already exists")
    } else {
        let usernameinput = document.getElementById("inputusername");
        let passwordinput = document.getElementById("inputPassword");
        let firstnameinput = document.getElementById("inputfirstname");
        let lastnameinput = document.getElementById("inputlastname");
        let favouriteCharacter_idinput = document.getElementById("inputfavouriteCharacter_id");
        sessionStorage.playername = usernameinput.value;

        let bodyinput = {
            username: usernameinput.value,
            password: passwordinput.value,
            firstname: firstnameinput.value,
            lastname: lastnameinput.value,
            favouriteCharacter_id: favouriteCharacter_idinput.value
        }
        fetch("http://localhost:8080/players/post",{
            body: JSON.stringify(bodyinput),
            method: "POST",
            headers: {"Content-Type" : "application/json"}
        } )
        window.location.href = "./profile.html";
    }

}