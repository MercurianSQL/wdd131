const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});



const photos = [
    {
        src: "images/pexels-babydov-black.webp",
        caption: "Most pugs are either fawn or black."
    },
    {
        src: "images/pexels-burst-sun1.webp",
        caption: "Pugs are ideal lap dogs."
    },
    {
        src: "images/pexels-ekam-juneja-2-attention.webp",
        caption: "Pugs are very food-motivated."
    },
    {
        src: "images/pexels-ekam-juneja-3-treats.webp",
        caption: "A group of pugs is called a grumble."
    }
];

let currentPhoto = 0;

const photo = document.querySelector("#photo");
const caption = document.querySelector("#caption");

function changePhoto() {
    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    photo.src = photos[currentPhoto].src;
    caption.textContent = photos[currentPhoto].caption;
}

setInterval(changePhoto, 3000);