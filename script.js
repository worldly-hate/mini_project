let tasks = [];

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task !== '') {
            tasks.push(task);
            taskInput.value = '';
            displayTasks();
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const taskIndex = e.target.dataset.index;
            if (e.target.textContent === 'Edit') {
                const newTask = prompt('Edit task', tasks[taskIndex]);
                if (newTask !== null) {
                    tasks[taskIndex] = newTask.trim();
                    displayTasks();
                }
            } else if (e.target.textContent === 'Delete') {
                tasks.splice(taskIndex, 1);
                displayTasks();
            }
        }
    });

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.textContent = task;
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.dataset.index = index;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.dataset.index = index;
            taskItem.appendChild(editBtn);
            taskItem.appendChild(deleteBtn);
            taskList.appendChild(taskItem);
        });
    }
});
