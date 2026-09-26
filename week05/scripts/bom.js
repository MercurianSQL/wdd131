//these are Elements of the Document Object Model (DOM)
const inputE = document.querySelector('#favchap');
const buttonE = document.querySelector('button');
const listE = document.querySelector('#list');

//get chapList form localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

//start the array near the top of your JavaScript file, before the functions that will use it.
let chaptersArray = getChapterList() || [];

//on button click
buttonE.addEventListener('click', function () {

    //did the user enter something?
    if (inputE.value.trim() !== '') {
        displayList(inputE.value);
        chaptersArray.push(inputE.value);
        setChapterList(); //The purpose of this function is to save your chaptersArray into localStorage.
        inputE.value = "";
        inputE.focus();
    }

});

//display a chapter
function displayList(item) {
    let li = document.createElement('li');
    let deleteButtonE = document.createElement('button');

    li.textContent = item;
    deleteButtonE.textContent = '❌';
    deleteButtonE.classList.add('delete');

    li.append(deleteButtonE); //error! Remember the Es for element in this older example
    listE.append(li);

    //event listener for the delete button
    deleteButtonE.addEventListener('click', function () {
        listE.removeChild(li);
        deleteChapter(li.textContent);
        inputE.focus();
    });
    console.log('Sometimes, I wonder if the professors like to Punk us.');
};

//setChapterList()
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

//delete a chapter
function deleteChapter(chapterE) {
    chapterE = chapterE.slice(0, chapterE.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapterE);
    setChapterList();
}

//Display chaps that were already saved
chaptersArray.forEach(chapterE => { //error: infinite displayList
    displayList(chapterE);
});