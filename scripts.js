const form = document.querySelector("form");
const addItem = document.getElementById("add-item");
const itensList = document.getElementById("itens-list");
const formItem = document.querySelector(".item");
let checkboxNumber = 1;
form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkboxNumber = createNewItem(addItem.value, checkboxNumber);
})

formItem.addEventListener("submit", (event) => {
    event.preventDefault();
})

function createNewItem(newItem, checkboxNumber) {
    checkboxNumber = checkboxNumber + 1;
    const item = document.createElement("label");
    item.textContent = newItem;
    item.setAttribute("for", "checkbox-" + checkboxNumber);

    const checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("id", "checkbox-"+ checkboxNumber);
    checkbox.setAttribute("type", "checkbox");

    const button = document.createElement("button");
    button.classList.add("trash-bin");
    button.setAttribute("type", "submit");

    const newForm = document.createElement("form");
    newForm.append(checkbox, item, button);
    newForm.classList.add("item");

    itensList.append(newForm);
    
    return checkboxNumber;
}