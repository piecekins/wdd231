// storage.js
let tasks = [];
let taskKey = "59"
function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    </li>`
}

function renderTasks(tasks) {
  // get the list element from the DOM
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
  const html = tasks.map(taskTemplate).join("");
  listElement.innerHTML = html;
}

function newTask() {
  // get the value entered into the #todo input
  const task = document.querySelector("#todo").value;
  // add it to our arrays tasks
  tasks.push({ detail: task, completed: false });
  // render out the list
  setLocalStorage(taskKey, tasks)
  renderTasks(tasks);
  
}

function removeTask(taskElement) {
  // Notice how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );
  taskElement.remove();

  setLocalStorage(taskKey, tasks)
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
  console.log(tasks);
  setLocalStorage(taskKey, tasks)
}

function manageTasks(e) {
  // did they click the delete or complete icon?
  console.log(e.target);
  const parent = e.target.closest("li");
  if (e.target.dataset.action === "delete") {
    removeTask(parent);
    
  }
  if (e.target.dataset.action === "complete") {
    completeTask(parent);
  }

}

function setUser(){
    if (localStorage.getItem("todo-user") !== null){
        const name = localStorage.getItem("todo-user");
        document.querySelector(".user").textContent = name
    }
    
    
}

function updateUser(){
    const name = document.querySelector("#todoName").value;
    localStorage.setItem("todo-user", name);
    document.querySelector(".user").textContent = name
}

function setLocalStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data))
}

function getLocalStorage(key){
    data = JSON.parse(localStorage.getItem(key))
    return data
}

function init(){
if (localStorage.getItem(taskKey) !== null){
        tasks = getLocalStorage(taskKey)
    }
console.log(tasks)

renderTasks(tasks);
setUser()
}


// Add your event listeners here
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
document.querySelector("#submitName").addEventListener("click", updateUser)

// render  the initial list of tasks (if any) when the page loads
init();