function getAllMatches() {
   fetch("http://localhost:8080/matches/get/all")
       .then(res => res.
           json())
       .then(json => displayMatches(json));
}

function displayMatches(data) {
    for (let match of data) {
        let newMatch = document.createElement("tr");
        let id = document.createElement("td");
        id.innerText = match.id;
        newMatch.appendChild(id);
        let player_1 = document.createElement("td");
        player_1.innerText = match.player1.username + "";
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










