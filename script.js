const taskBtn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")
const taskInput = document.querySelector("#taskInput")

function addTask(){
    const text = taskInput.value.trim();
    if(text === '') return;

    const li = document.createElement("li");
    li.textContent = text;

    taskList.appendChild(li);

    taskInput.value = '';
}

taskBtn.addEventListener("click", addTask)