// select the DOM elements for output

const year = document.querySelector("#year");
const full = document.querySelector("#full");
const worldfull = document.querySelector("#world-full");

// use the date object
const today = new Date();


year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

alert(document.lastModified);