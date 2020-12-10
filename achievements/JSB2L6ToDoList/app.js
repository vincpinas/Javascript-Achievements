let AddToDo = document.getElementById('AddToDo');
let FinToDo = document.getElementById('FinishToDo');
let RemToDo = document.getElementById('RemoveToDo');
let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');
let alertText = document.getElementById('alertText');
const popUp = document.querySelector('.popUpAlert');
const toDoItems = [];

// Adding a To Do.
AddToDo.addEventListener('click', () => {

    if (inputField.value.length > 0) { // Check if the input is longer than 0 character before pushing the input to the toDoList
        toDoItems.push(inputField.value)
        updateList()
    }

    if (inputField.value.length == 0) { // Check if they put any input in before using the button
        Alert()
    } else {
        toDoContainer.classList.add("to-dos--active")
    }

    inputField.value = "";
});


// Removing a To Do.
RemToDo.addEventListener('click', () => {
    if (inputField.value.length > 0 && isNaN(inputField.value) == false) { // Check if the input is longer than 0 characters and if it's a number before using the function.
        try {
            deleteItem()
        } catch(e) {
            console.log(e)
        }
    }

    if (inputField.value.length == 0) { // Check if they filled anything in the input.
        Alert()
    }

    if (isNaN(inputField.value)) {
        alertText.innerHTML = "Oops, you need to fill in the number of the item there!" // Check if they used a number in the input.
        Alert()
    } else if (inputField.value.length > 0 && toDoItems.length == 0) { // Check if there are currently any items in the list to use the function on.
        alertText.innerHTML = "There are currently no items on your to do list."
        Alert()
    }
});


// Finishing a To Do.
FinToDo.addEventListener('click', () => {
    FinishItem()

    if (inputField.value.length == 0) {
        Alert()
    }

    if (inputField.value.length > 0 && isNaN(inputField.value)) {
        alertText.innerHTML = "Oops, you need to fill in the number of the item there!" // Check if they used a number in the input.
        Alert()
    } else if (inputField.value.length > 0 && toDoItems.length == 0) { // Check if there are currently any items in the list to use the function on.
        alertText.innerHTML = "There are currently no items on your to do list."
        Alert()
    }
});



// Functions

// Update Function
function updateList() {
    toDoContainer.innerHTML = ""
    toDoItems.forEach(function(n) {
        toDoContainer.innerHTML += "<li>"+n+"</li>"
    })
}

// Delete Item Function
function deleteItem() {
    let ParsedInt = parseInt(inputField.value)
    let index = ParsedInt - 1
    toDoItems.splice(index, 1);
    updateList()
}

// Finish Item Function
function FinishItem() {
    let ParsedInt = parseInt(inputField.value)
    let index = ParsedInt - 1
    updateList()
}

// Custom Alert Function.
async function Alert() { 
    popUp.classList.add("popUpAlert--active")
    await sleep(4400)
    popUp.classList.remove("popUpAlert--active")
    alertText.innerHTML = "Something went wrong... <br>Perhaps you should try filling in the input field <br>before trying to perform an action?"
}

// Sleep Function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
