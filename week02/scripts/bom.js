//these are Elements of the Document Object Model (DOM)
const inputE = document.querySelector('#favchap');
const buttonE = document.querySelector('button');
const listE = document.querySelector('#list');

//on button click
buttonE.addEventListener('click', function () {

    //did the user enter something?
    if (inputE.value.trim() !== '') {

        //create a new list item, and give it an input value
        const chapterE = document.createElement('li');
        chapterE.textContent = inputE.value;

        //create the delete button and add an event listener to the button
        const deleteButtonE = document.createElement('button');
        deleteButtonE.textContent = '❌';
        deleteButtonE.setAttribute('aria-label', 'delete');

        //event listener for the delete button
        deleteButtonE.addEventListener('click', function () {
            listE.removeChild(chapterE);
            inputE.focus();
        });

        //add the delete button to the list item THEN add the item to the list
        chapterE.appendChild(deleteButtonE);
        listE.appendChild(chapterE);
        inputE.value = '';
    }
    inputE.focus();
});




