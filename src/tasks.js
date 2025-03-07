export function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    if (taskInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskInput.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
}

export function loadTasks() {
    const taskList = document.getElementById("task-list");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}
