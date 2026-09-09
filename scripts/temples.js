const mainnav = document.querySelector('.nav');
const hambutton = document.querySelector('#album');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});