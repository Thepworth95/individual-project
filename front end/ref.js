function searchFilm() {
   fetch("http://www.omdbapi.com/?apikey=" + Key + "&s=" + filmName.value)
       .then(res => res.
           json())
       //.then(json => console.log(json));
       .then(json => displayMovie(json));
}
function displayMovie(data) {
   for (let movie of data.Search) {
       let newMovie = document.createElement("div");
       newMovie.addEventListener('click', () => { window.location.href = './specificMovie.html?movieId=' +movie.imdbID
       });
       newMovie.className = "card mb-3";
       newMovie.style = "max-width: 700px";
       let container = document.createElement("div");
       container.className = "row no-gutters";
       newMovie.appendChild(container);
       let imgStore = document.createElement("div");
       imgStore.className = "col-md-6";
       container.appendChild(imgStore);
       let poster = document.createElement("img");
       poster.className = "card-image";
       poster.src = movie.Poster;
       imgStore.appendChild(poster);
       let bodyStore = document.createElement("div");
       bodyStore.className = "col-md-6";
       container.appendChild(bodyStore);
       let cardBody = document.createElement("div");
       cardBody.className = "card-body";
       bodyStore.appendChild(cardBody);
       let title = document.createElement("h1");
       title.className = "card-title";
       title.innerText = movie.Title;
       cardBody.appendChild(title);
       let info = document.createElement("p");
       info.className = "card-text"
       info.innerText = "Type: " + movie.Type + "\n" + "Year: " + movie.Year;
       cardBody.appendChild(info);
       main.appendChild(newMovie);
   }
}