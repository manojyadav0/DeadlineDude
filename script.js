function addTask() {
    const taskInput = document.getElementById("taskInput");
    const deadlineInput = document.getElementById("deadlineInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const taskItem = document.createElement("li");
        const deleteButton = document.createElement("button");
        const deadlineSpan = document.createElement("span");

        taskItem.textContent = taskInput.value;
        deadlineSpan.textContent = `Deadline: ${formatDeadline(deadlineInput.value)}`;
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            if (confirm("Are you sure you want to delete this task?")) {
                taskList.removeChild(taskItem);
            }
        };
        taskItem.appendChild(deadlineSpan);
        taskItem.appendChild(deleteButton);
        taskItem.onclick = function(event) {
            event.target.classList.toggle("completed");
        };

        taskList.appendChild(taskItem);
        taskInput.value = "";
        deadlineInput.value = "";
    }
}
function formatDeadline(deadline) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(deadline).toLocaleDateString('en-US', options);
    return formattedDate !== 'Invalid Date' ? formattedDate : 'No Deadline';
}
