const todoCollection = [];
const localStorageKey = "todos"

// Binding
const inputFormElement = document.getElementById("inputForm")
inputFormElement.addEventListener("submit", formHandler)

const inputFieldElement = document.getElementById("inputField")
const outputListElement = document.getElementById("todoOutput")

// Handlers
function formHandler (event) {
    event.preventDefault();
    console.log(inputFieldElement.value)

    // TODO: continue from here
    AddTodo(inputFieldElement.value)
    // inputFieldElement.value = ""
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

// Local Storage
const data = JSON.parse(localStorage.getItem(localStorageKey))
if (data && data.length > 0) {
    // pre-load the stored data
    data.forEach(item => {
        AddTodo(item)
    })
}
