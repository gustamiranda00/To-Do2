const taskBtn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")
const taskInput = document.querySelector("#taskInput")
const clearAllBtn = document.querySelector("#clearAllBtn")
const taskCounter = document.querySelector("#taskCounter")

function updateCounter(){
    const total = document.querySelectorAll("#taskList li").length;
    taskCounter.textContent = `${total} tarefas`;
}

function addTask(){
    const text = taskInput.value.trim();
    if(text === '') return;

    const li = document.createElement("li");
    li.textContent = text;

    taskList.appendChild(li);

    taskInput.value = '';
    updateCounter();
}

taskBtn.addEventListener("click", addTask)

taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
})

clearAllBtn.addEventListener("click", function(){
    taskList.innerHTML = '';
    updateCounter();
})