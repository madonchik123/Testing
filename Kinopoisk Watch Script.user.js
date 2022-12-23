// ==UserScript==
// @name        Kinopoisk Watch Script
// @namespace   https://kinopoisk-watch.org
// @include     https://www.kinopoisk.ru/*
// @version     1
// @grant       none
// ==/UserScript==

// Create the button and add it to the page
var button = document.createElement("button");
button.innerHTML = "Watch on Kinopoisk Watch";
button.style.position = "fixed";
button.style.top = "0";
button.style.left = "0";
button.style.zIndex = "9999";
button.style.padding = "5px 10px";
button.style.fontSize = "14px";
button.style.color = "#fff";
button.style.backgroundColor = "#00b7ff";
button.style.border = "none";
button.style.borderRadius = "3px";
button.style.cursor = "pointer";
document.body.appendChild(button);

// Add an event listener to the button to handle clicks
button.addEventListener("click", function() {
  // Get the current tab's URL
  var currentUrl = window.location.href;

  // Extract the film's ID from the URL
  var filmId = extractFilmId(currentUrl);

  // Construct the new URL with the film's ID appended to the end
  var newUrl = "https://kinopoisk-watch.org/player/?id=" + filmId;

  // Redirect the current tab to the new URL
  window.location.href = newUrl;
});

// This function should extract the film's ID from the given URL
function extractFilmId(url) {
  // Use a regular expression to extract the film's ID from the URL
  var filmId = url.match(/\d+/);
  if (filmId) {
    return filmId[0];
  }
  return null;
}