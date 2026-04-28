function updateCounter(){
    const total = document.querySelectorAll("#taskList li").length;
    const completed = document.querySelectorAll(".completed").length;

    taskCounter.textContent = `${completed} de ${total} tarefas concluídas`;
}