const userInput = document.querySelector("#user-input");
const addButton = document.querySelector("#lg-button");
const listTen = document.querySelector("#chapter-list");

// userInput.addEventListener("keyup", function (event) {
//     if (event.key === "Enter") {
//         addButton.click(); // Triggers the button’s click event
//     }
// });

addButton.addEventListener("click", function () {
    if (userInput.value.trim() !== "") {
        const lineItem = document.createElement("li");
        lineItem.textContent = userInput.value.trim();
        listTen.append(lineItem);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.style.color = "red";
        deleteButton.style.fontSize = "1.2rem";
        deleteButton.setAttribute("aria-label", "Delete Entry");
        lineItem.append(deleteButton);

        deleteButton.addEventListener("click", function () {
            listTen.removeChild(lineItem);
            userInput.focus(); // UX: cursor remains in the <input> field, else has to be clicked again
            userInput.value = ""; // Clears the input field
            userInput.focus();
        });
    } else {
        userInput.focus();
    }
});

