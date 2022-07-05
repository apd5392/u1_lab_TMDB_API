const API_KEY = "1b95e0fa2b513c16dd02887074545dfd";
const DOMAIN = "https://api.themoviedb.org/3";
const IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/original";
const button = document.querySelector("button");
const movieInput = document.querySelector("#search-input");
const list = document.querySelector(".movie-list");

button.addEventListener("click", async () => {
  let movie = movieInput.value;
  let response = await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}`
    )
    .then((result) => result.data.results); // arrow fucntion will return automatically. If in curly brace will need to do a return
  for (let i = 0; i < response.length; i++) {
    console.log("Log is showing"); // Shows "Log is showing" in the console
    console.log(response); // Shows the response
    let movieList = document.createElement("div");
    movieList.innerHTML = `<img src = ${IMAGE_BASE_PATH}${response[0].backdrop_path}>`;
    list.append(movieList);
  }
});

list.innerText = "";
