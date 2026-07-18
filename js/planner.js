// =======================================
// Academic Planner
// =======================================

const taskForm = document.getElementById("taskForm");
const taskContainer = document.getElementById("taskContainer");
const searchTask = document.getElementById("searchTask");
const filterTasks = document.getElementById("filterTasks");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

// =======================================
// Load Tasks
// =======================================

let tasks = JSON.parse(localStorage.getItem("plannerTasks")) || [];


// =======================================
// Save Tasks
// =======================================

function saveTasks(){

localStorage.setItem(

"plannerTasks",

JSON.stringify(tasks)

);

}


// =======================================
// Update Statistics
// =======================================

function updateStats(){

totalTasks.textContent = tasks.length;

const completed = tasks.filter(task => task.completed);

completedTasks.textContent = completed.length;

pendingTasks.textContent = tasks.length - completed.length;

}


// =======================================
// Render Tasks
// =======================================

function renderTasks(){

taskContainer.innerHTML = "";

let filteredTasks = [...tasks];


// Search

const keyword = searchTask.value.toLowerCase();

if(keyword){

filteredTasks = filteredTasks.filter(task =>

task.name.toLowerCase().includes(keyword) ||

task.course.toLowerCase().includes(keyword)

);

}


// Filter

const filter = filterTasks.value;

if(filter === "completed"){

filteredTasks = filteredTasks.filter(task => task.completed);

}

if(filter === "pending"){

filteredTasks = filteredTasks.filter(task => !task.completed);

}


// Display Tasks

filteredTasks.forEach((task,index)=>{

const card = document.createElement("article");

card.className = "task-card";

card.innerHTML = `

<div class="task-header">

<h3>${task.name}</h3>

<span class="status ${task.completed ? "completed" : "progress"}">

${task.completed ? "Completed" : "Pending"}

</span>

</div>

<p>

<strong>Course:</strong>

${task.course}

</p>

<p>

<strong>Priority:</strong>

${task.priority}

</p>

<p>

<strong>Importance:</strong>

${task.importance}

</p>

<p>

<strong>Difficulty:</strong>

${task.difficulty}

</p>

<p>

<strong>Due:</strong>

${task.dueDate || "No Due Date"}

</p>

<div class="task-actions">

<button class="complete-btn"

onclick="toggleComplete(${index})">

<i class="fa-solid fa-check"></i>

Complete

</button>

<button class="delete-btn"

onclick="deleteTask(${index})">

<i class="fa-solid fa-trash"></i>

Delete

</button>

</div>

`;

taskContainer.appendChild(card);

});

updateStats();

}
// =======================================
// Add Task
// =======================================

taskForm.addEventListener("submit", function(e){

e.preventDefault();

const taskName = document.getElementById("taskName").value.trim();

const course = document.getElementById("course").value.trim();

const priority = document.getElementById("priority").value;

const importance = document.getElementById("importance").value;

const difficulty = document.getElementById("difficulty").value;

const dueDate = document.getElementById("dueDate").value;

if(taskName === ""){

alert("Please enter a task name.");

return;

}

if(course === ""){

alert("Please enter a course.");

return;

}

tasks.push({

name: taskName,

course: course,

priority: priority,

importance: importance,

difficulty: difficulty,

dueDate: dueDate,

completed: false

});

saveTasks();

renderTasks();

taskForm.reset();

});


// =======================================
// Delete Task
// =======================================

function deleteTask(index){

if(confirm("Delete this task?")){

tasks.splice(index,1);

saveTasks();

renderTasks();

}

}


// =======================================
// Complete Task
// =======================================

function toggleComplete(index){

tasks[index].completed = !tasks[index].completed;

saveTasks();

renderTasks();

}


// =======================================
// Search
// =======================================

searchTask.addEventListener("input",function(){

renderTasks();

});


// =======================================
// Filter
// =======================================

filterTasks.addEventListener("change",function(){

renderTasks();

});


// =======================================
// Default Sample Tasks
// =======================================

if(tasks.length===0){

tasks=[

{

name:"COS102 Lab Installation",

course:"COS102",

priority:"High",

importance:"Very Important",

difficulty:"Medium",

dueDate:"2026-07-20",

completed:true

},

{

name:"GST112 Essay",

course:"GST112",

priority:"Medium",

importance:"Important",

difficulty:"Hard",

dueDate:"2026-07-25",

completed:false

},

{

name:"PHY102 Assignment",

course:"PHY102",

priority:"High",

importance:"Very Important",

difficulty:"Hard",

dueDate:"2026-07-28",

completed:false

},

{

name:"MTH102 Practice Questions",

course:"MTH102",

priority:"Low",

importance:"Important",

difficulty:"Easy",

dueDate:"2026-07-30",

completed:false

}

];

saveTasks();

}


// =======================================
// Start App
// =======================================

renderTasks();
