// Mailing list signup counter
let signupCount = Number(localStorage.getItem("signupCount")) || 0;
signupCount++;
localStorage.setItem("signupCount", signupCount);

const count = document.querySelector("#signupCount");
count.textContent = `${signupCount}`;
;