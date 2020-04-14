const todoCollection = [];
const localStorageKey = "todos"

// Binding
const addElement = document.getElementById("addBtn")
addElement.addEventListener("click", addHandler)

const removeElement = document.getElementById("remBtn")
removeElement.addEventListener("click", removeHandler)

const removeAllElement = document.getElementById("remAllBtn")
removeAllElement.addEventListener("click", removeAllHandler)

const removeFirstElement = document.getElementById("remFirstBtn")
removeFirstElement.addEventListener("click", removeFirstHandler)

const removeLastElement = document.getElementById("remLastBtn")
removeLastElement.addEventListener("click", removeLastHandler)

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
    const element = document.createElement("LI");
    const elementText = document.createTextNode(todoText);
	element.id = todoText;
    element.appendChild(elementText);
	
    // Update the View
    outputListElement.appendChild(element);

    // Update the Model
    todoCollection.push(todoText);
    localStorage.setItem(localStorageKey, JSON.stringify(todoCollection));
}
function RemTodo(todoText) {
	
	  while (item = document.getElementById(todoText)){
	  outputListElement.removeChild(item);
	  }

}
function RemAllTodo(){
	while (outputListElement.hasChildNodes()) {  
    outputListElement.removeChild(outputListElement.firstChild);
	}
}

function RemFirstTodo (){
	if (outputListElement.hasChildNodes()) {
    outputListElement.removeChild(outputListElement.firstChild);
	}
	
}

function RemLastTodo () {
	if (outputListElement.hasChildNodes()) {
    outputListElement.removeChild(outputListElement.lastChild);
	}
}
// Handlers
function addHandler (event) {
    event.preventDefault();
    AddTodo(inputFieldElement.value);
	inputFieldElement.value = "";
}
function removeHandler (event) {
	event.preventDefault();
	RemTodo(inputFieldElement.value);
	inputFieldElement.value = "";
}
function removeAllHandler (event) {
	event.preventDefault();
	RemAllTodo();
	inputFieldElement.value = "";
}

function removeFirstHandler() {
	event.preventDefault();
	RemFirstTodo();
}
function removeLastHandler() {
	event.preventDefault();
	RemLastTodo();
}