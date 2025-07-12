const userInput = document.querySelector("#user-input");
const addButton = document.querySelector("#lg-button");
const listTen = document.querySelector("#chapter-list");

addButton.addEventListener("click", function () {
    if (userInput.value.trim() !== "") {
        const lineItem = document.createElement("li");
        lineItem.textContent = userInput.value.trim();
        listTen.append(lineItem);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.style.color = "red";
        deleteButton.style.fontSize = "1.2rem";
        deleteButton.arialabel = "Delete Entry";
        lineItem.append(deleteButton);
        userInput.value = ""; // Clears the input field
        userInput.focus(); // UX: cursor remains in the <input> field, else has to be clicked again
    }
});

deleteButton.addEventListener("click", function () {

    listTen.removeChild(lineItem);
    userInput.focus(); // UX: cursor remains in the <input> field, else has to be clicked again
})
