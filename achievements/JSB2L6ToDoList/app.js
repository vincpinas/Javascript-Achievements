let AddToDo = document.getElementById('AddToDo');
let FinToDo = document.getElementById('FinishToDo');
let RemToDo = document.getElementById('RemoveToDo');
let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');
const popUp = document.querySelector('.popUpAlert');
const toDoItems = [];

// Adding a To Do.
AddToDo.addEventListener('click', () => {

    if (inputField.value.length > 0) {
        toDoItems.push(inputField.value)
        updateList()
    }

    if (inputField.value.length == 0) {
        Alert()
    } else {
        toDoContainer.classList.add("to-dos--active")
    }

    inputField.value = "";
});


// Removing a To Do.
RemToDo.addEventListener('click', () => {
    if (inputField.value.length > 0 && isNaN(inputField.value) == false) {
        try {
            deleteItem()
        } catch(e) {
            console.log(e)
        }
    }

    if (inputField.value.length == 0) {
        Alert()
    }
});


// Finishing a To Do.
FinToDo.addEventListener('click', () => {
    FinishItem()

    if (inputField.value.length == 0) {
        Alert()
    }
});



// Functions
function updateList() {
    toDoContainer.innerHTML = ""
    toDoItems.forEach(function(n) {
        toDoContainer.innerHTML += "<li>"+n+"</li>"
    })
}

function deleteItem() {
    let ParsedInt = parseInt(inputField.value)
    let index = ParsedInt - 1
    toDoItems.splice(index, 1);
    updateList()
}

function FinishItem() {
    let ParsedInt = parseInt(inputField.value)
    let index = ParsedInt - 1
    updateList()
}

async function Alert() { 
    popUp.classList.add("popUpAlert--active")
    await sleep(4400)
    popUp.classList.remove("popUpAlert--active")
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
