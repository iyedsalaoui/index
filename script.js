document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = '';
});
