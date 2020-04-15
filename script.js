const todoCollection = [];
const localStorageKey = "todos"

var nameId = "id";
var loop = 1;

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
        AddTodo(item)
    })
}

function AddTodo(todoText) {
        const element = document.createElement("LI");
	const elementBtn = document.createElement("button");
	const elementText = document.createTextNode(todoText);
	var elementId = nameId+loop;
	loop++;
	elementBtn.id = elementId;
	element.id = elementId;
	elementBtn.type = "submit";
	elementBtn.innerHTML = "x";
	elementBtn.addEventListener("click",function(){ removeHandler(elementBtn.id); });

	element.appendChild(elementText);
	element.appendChild(elementBtn);

	
    // Update the View
	outputListElement.appendChild(element);

    // Update the Model
        todoCollection.push(todoText);
	localStorage.setItem(localStorageKey, JSON.stringify(todoCollection));
	
}
function RemTodo(todoText) {
	
	  item = document.getElementById(todoText);
	  outputListElement.removeChild(item);

}
function RemAllTodo(){
	while (outputListElement.hasChildNodes()) {  
        outputListElement.removeChild(outputListElement.firstChild);
	}
}


// Handlers
function addHandler (event) {
	event.preventDefault();
	if (inputFieldElement.value.length==0) {alert("Empty Field");}
	else
	{
        AddTodo(inputFieldElement.value);
	inputFieldElement.value = "";
	}
}
function removeHandler (elementToRemoveId) {
	event.preventDefault();
	RemTodo(elementToRemoveId);

}
function removeAllHandler (event) {
	event.preventDefault();
	RemAllTodo();
	inputFieldElement.value = "";
}
