const todoCollection = [];
const localStorageKey = "todos"

// Binding
const formElement = document.getElementById("todoInput")
formElement.addEventListener("submit", formHandler)

const inputFieldElement = document.getElementById("inputField")
const outputListElement = document.getElementById("todoOutput")

// Local Storage
const data = JSON.parse(localStorage.getItem(localStorageKey))
if (data && data.length > 0) {
    // pre-load the stored data
    data.forEach(item => {
        AddTodo(item)
    })
}

function AddTodo(todoText) {
    const element = document.createElement("LI")
    const elementText = document.createTextNode(todoText)
    element.appendChild(elementText)

    // Update the View
    outputListElement.appendChild(element)

    // Update the Model
    todoCollection.push(todoText);
    localStorage.setItem(localStorageKey, JSON.stringify(todoCollection))
}

// Handlers
function formHandler (event) {
    event.preventDefault();
    AddTodo(inputFieldElement.value)
    inputFieldElement.value = ""
}