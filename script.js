function AddTodo(todoText) {
    const element = document.createElement("LI")
    const elementText = document.createTextNode(todoText)
    element.appendChild(elementText)

    outputListElement.appendChild(element)
}

// Handlers
function formHandler (event) {
    event.preventDefault();
    AddTodo(inputFieldElement.value)
}

// Binding
const formElement = document.getElementById("todoInput")
formElement.addEventListener("submit", formHandler)

const inputFieldElement = document.getElementById("inputField")

const outputListElement = document.getElementById("todoOutput")