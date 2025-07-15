const userInput = document.querySelector("#user-input");
const addButton = document.querySelector("#lg-button");
const chapterList = document.querySelector("#chapter-list");

// userInput.addEventListener("keyup", function (event) {
//     if (event.key === "Enter") {
//         addButton.click(); // Triggers the button’s click event
//     }
// });

addButton.addEventListener("click", function () {
    let trImput = userInput.value.trim();
    if (trImput !== "") {
        let lineItem = document.createElement("li");
        lineItem.textContent = trImput;
        chapterList.appendChild(lineItem);
        userInput.value = "";
        userInput.focus();

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        // deleteButton.style.color = "red";
        // deleteButton.style.fontSize = "1.2rem";
        // deleteButton.setAttribute("aria-label", "Delete Entry");
        lineItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", function () {
            chapterList.removeChild(lineItem);
            userInput.focus();
        });
    }
});

