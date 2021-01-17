// SELECTORS
// form
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
// list
const todoList = document.querySelector(".todo-list");
const item = todoList.children;

// Event Listeners
todoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText = todoInput.value;
    todoInput.value = "";
    todoList.appendChild(newItem);
})

// Functions

