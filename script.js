const todoCollection = []
const localStorageKey = "todos"

var liId = "li";
var loop = 0;
const remBtnText = "X";

// Binding
const addElement = document.getElementById("addBtn")
addElement.addEventListener("click", addHandler)

const removeAllElement = document.getElementById("remAllBtn")
removeAllElement.addEventListener("click", removeAllHandler)

const inputFieldElement = document.getElementById("inputField")
const outputListElement = document.getElementById("todoOutput")

// Local Storage
const data = JSON.parse(localStorage.getItem(localStorageKey))
if (data && data.length > 0) {
    // pre-load the stored data
    data.forEach(item => {
        addTodo(item)
    })
}

function createButton(ID) {
    const elementBtn = document.createElement("button");
    //elementBtn.id = ID;
    elementBtn.classList.add("remBtnStyle")
    elementBtn.type = "submit";
    elementBtn.innerText = remBtnText;
    elementBtn.addEventListener("click", function() { removeHandler(elementBtn.parentElement.id); });
    const elementTemp = document.getElementById(ID)
    elementTemp.appendChild(elementBtn);
}

function addTodo(todoText) {
    //check if item is already there
    if (todoCollection.includes(todoText)) {
        alert("item is already in your list");
        return;
    }
    //create li item
    const element = document.createElement("LI");
    const elementText = document.createTextNode(todoText);
    var elementId = liId + loop++;
    element.id = elementId;

    // Update the View
    outputListElement.appendChild(element);
    createButton(elementId);
    element.appendChild(elementText);

    // Update the Model
    todoCollection.push(todoText);
    localStorage.setItem(localStorageKey, JSON.stringify(todoCollection));

}

function remTodo(itemId) {
    item = document.getElementById(itemId);
    outputListElement.removeChild(item);

    //remove item from localStorag
    var itemText = (item.innerText).slice(1); //remove button text "X"
    index = todoCollection.indexOf(itemText);
    if (index > -1) {
        todoCollection.splice(index, 1);
        localStorage.setItem(localStorageKey, JSON.stringify(todoCollection));
    }

}

function remAllTodo() {
    while (outputListElement.hasChildNodes()) {
        outputListElement.removeChild(outputListElement.firstChild);
    }
    //remove all items from localStorag
    localStorage.removeItem(localStorageKey);
}


// Handlers
function addHandler(event) {
    event.preventDefault();
    if (inputFieldElement.value.length == 0) { alert("Empty Field"); } else {
        addTodo(inputFieldElement.value);
        inputFieldElement.value = "";
    }
}

function removeHandler(elementToRemoveId) {
    event.preventDefault();
    remTodo(elementToRemoveId);

}

function removeAllHandler(event) {
    event.preventDefault();
    if (outputListElement.hasChildNodes()) {
        Check = confirm("remove all");
        if (Check == false) return;
        remAllTodo();
        inputFieldElement.value = "";
        return;
    }
    alert("nothing to remove");
    return;
}