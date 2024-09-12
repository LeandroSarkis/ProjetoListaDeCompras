const form = document.querySelector("form");
const addItem = document.getElementById("add-item");
const itensList = document.getElementById("itens-list");
const deleteAlert = document.getElementById("delete-alert");

let itemID = 1;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    itemID = createNewItem(addItem.value, itemID);
})

function createNewItem(goal, itemID) {
    const newItem = document.createElement("div")
    newItem.classList.add("item")
    newItem.setAttribute("id", "item-" + itemID)
    newItem.innerHTML = `<input type="checkbox" class="checkbox" id="checkbox-${itemID}"> <label for="checkbox-${itemID}">${goal}</label> <button type="button "class="delete-button"onclick="removeItem('${newItem.id}')"></button>` 

    itensList.append(newItem);
    itemID = itemID + 1;
    return itemID;
}

itensList.addEventListener("submit", (event) => {
    event.preventDefault()
})


function removeItem(itemID) {
    const itemToRemove = document.getElementById(itemID)

    deleteAlert.style.visibility="visible"

    if(itemToRemove) {
        itemToRemove.style.display="none"
    }
}

function hiddenAlert() {
    deleteAlert.style.visibility="hidden"
}