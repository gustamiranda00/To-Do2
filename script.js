const taskBtn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")
const taskInput = document.querySelector("#taskInput")
const clearAllBtn = document.querySelector("#clearAllBtn")

function addTask(){
    const text = taskInput.value.trim();
    if(text === '') return;

    const li = document.createElement("li");
    li.textContent = text;

    taskList.appendChild(li);

    taskInput.value = '';
}

taskBtn.addEventListener("click", addTask)

taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
})

clearAllBtn.addEventListener("click", function(){
    taskList.innerHTML = '';
})