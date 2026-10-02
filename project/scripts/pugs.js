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

photos.forEach((photo) => {
    console.log(photo.caption);
});

let currentPhoto = 0;



const photo1 = document.querySelector("#photo1");
const photo2 = document.querySelector("#photo2");

const caption1 = document.querySelector("#caption1");
const caption2 = document.querySelector("#caption2");

function changePhoto() {
    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    let secondPhoto = currentPhoto + 1;

    if (secondPhoto >= photos.length) {
        secondPhoto = 0;
    }

    photo1.src = photos[currentPhoto].src;
    caption1.textContent = `${photos[currentPhoto].caption}`;

    photo2.src = photos[secondPhoto].src;
    caption2.textContent = `${photos[secondPhoto].caption}`;
}

setInterval(changePhoto, 3000);

