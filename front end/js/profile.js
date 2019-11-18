function getplayersMatches() {
    fetch("http://localhost:8080/players/get/all")
        .then(res => res.json())
        .then(json => displayUsername(json));
    fetch("http://localhost:8080/matches/get/all")
        .then(res => res.json())
        .then(json => displayMatches(json));
}

function displayMatches(data) {
    for (let match of data) {
        if (match.player1.username === sessionStorage.getItem('playername')) {
            let newMatch = document.createElement("tr");
            let id = document.createElement("td");
            id.innerText = match.id;
            newMatch.appendChild(id);
            let player_1 = document.createElement("td");
            player_1.innerText = match.player1.username;
            newMatch.appendChild(player_1);
            let char1 = document.createElement("td");
            char1.innerText = match.character1.name;
            newMatch.appendChild(char1);
            let player_2 = document.createElement("td");
            player_2.innerText = match.player2.username;
            newMatch.appendChild(player_2);
            let char2 = document.createElement("td");
            char2.innerText = match.character2.name;
            newMatch.appendChild(char2);
            let winner = document.createElement("td");
            winner.innerText = match.winner.username;
            newMatch.appendChild(winner);
            table_entries.appendChild(newMatch);
        }
    }
    for (let match of data) {
        if (match.player2.username === sessionStorage.getItem('playername')) {
            let newMatch = document.createElement("tr");
            let id = document.createElement("td");
            id.innerText = match.id;
            newMatch.appendChild(id);
            let player_1 = document.createElement("td");
            player_1.innerText = match.player1.username;
            newMatch.appendChild(player_1);
            let char1 = document.createElement("td");
            char1.innerText = match.character1.name;
            newMatch.appendChild(char1);
            let player_2 = document.createElement("td");
            player_2.innerText = match.player2.username;
            newMatch.appendChild(player_2);
            let char2 = document.createElement("td");
            char2.innerText = match.character2.name;
            newMatch.appendChild(char2);
            let winner = document.createElement("td");
            winner.innerText = match.winner.username;
            newMatch.appendChild(winner);
            table_entries.appendChild(newMatch);
        }
    }
}

function displayUsername(data) {
    for (let player of data) {
        if (player.username === sessionStorage.getItem('playername')) {
            sessionStorage.playerid = player.id;
            sessionStorage.playerfavchar = player.character.name;
        }
    }    
    playername.innerText = sessionStorage.getItem('playername') + "-" + sessionStorage.getItem('playerfavchar')
}

function updateUsername() {
    fetch("http://localhost:8080/players/update", {
        body: JSON.stringify({
            id: sessionStorage.getItem('playerid'),
            username: document.getElementById("updatedUserName").value
        }),
        method: "PUT",
        headers: { "Content-Type": "application/json" }
    })
    sessionStorage.playername = document.getElementById("updatedUserName").value;
    window.location.href = "./profile.html";
}

function updatePassword() {
    fetch("http://localhost:8080/players/update", {
        body: JSON.stringify({
            id: sessionStorage.getItem('playerid'),
            password: document.getElementById("updatedpassword").value
        }),
        method: "PUT",
        headers: { "Content-Type": "application/json" }
    })
    window.location.href = "./profile.html";
}

function updateFirstName() {
    fetch("http://localhost:8080/players/update", {
        body: JSON.stringify({
            id: sessionStorage.getItem('playerid'),
            firstname: document.getElementById("updatedfirstName").value
        }),
        method: "PUT",
        headers: { "Content-Type": "application/json" }
    })
    window.location.href = "./profile.html";
}

function updateLastName() {
    fetch("http://localhost:8080/players/update", {
        body: JSON.stringify({
            id: sessionStorage.getItem('playerid'),
            lastname: document.getElementById("updatedlastName").value
        }),
        method: "PUT",
        headers: { "Content-Type": "application/json" }
    })
    window.location.href = "./profile.html";
}

// function updateFavChar() {
//     fetch("http://localhost:8080/players/update", {
//         body: JSON.stringify({
//             id: sessionStorage.getItem('playerid'),
//             favouriteCharacter_id: document.getElementById("updatedfavouritecharacter").value
//         }),
//         method: "PUT",
//         headers: { "Content-Type": "application/json" }
//     })
//     window.location.href = "./profile.html";
// }




