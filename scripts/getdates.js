const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let lastModified = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = lastModified.toLocaleString();