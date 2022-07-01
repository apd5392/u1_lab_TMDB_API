const API_KEY = "1b95e0fa2b513c16dd02887074545dfd"; 
const DOMAIN = "https://api.themoviedb.org/3";
const IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/original";
const button = document.querySelector("button");
const movieInput = document.querySelector("#search-input");


button.addEventListener("click", async () => {
  let movie = movieInput.value;
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}`
  ).then (result => result.data.results) // arrow fucntion will return automatically. If in curly brace will need to do a return
  console.log("Log is showing"); // Shows "Log is showing" in the console
  console.log(response); // Shows the response
});

