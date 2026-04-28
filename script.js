const clearCompletedBtn = document.querySelector("#clearCompletedBtn")

clearCompletedBtn.addEventListener("click", function(){
    const completedTasks = document.querySelectorAll(".completed");

    completedTasks.forEach(task => {
        task.remove();
    });

    updateCounter();
})