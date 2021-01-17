// SELECTORS
// form
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
// list
const todoList = document.querySelector(".todo-list");
const item = todoList.children;

// Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Todo li
    const newItem = document.createElement("li");
    newItem.classList.add("todo-item");
    newItem.innerText = `${todoInput.value}`;
    todoInput.value = "";
    todoDiv.appendChild(newItem);

    // Check Mark Button
    const completedBtn = document.createElement("button");
    completedBtn.classList.add("complete-button");
    completedBtn.innerHTML = '<i class="fas fa-check-square"></i>';
    todoDiv.appendChild(completedBtn);

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    todoDiv.appendChild(deleteBtn);

    // Append to LIST
    todoList.appendChild(todoDiv);
}

function deleteCheck(e) {
    const item = e.target;
    // console.log(e.target.className);

    // CHECKED
    if (item.classList[0] == "complete-button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

    // DELETE
    if (item.classList[0] === "delete-button") {
        const todo = item.parentElement;
        todo.remove();
    }
}