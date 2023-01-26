const todoBackgroundColorClases = {
    'urgente': 'urgent',
    'diaria': 'daily',
    'mensual': 'monthly'
}
const buttonSave = document.getElementById('buttonSave');

buttonSave.addEventListener('click', (event) => {

    event.preventDefault();

    let task = {};
    task.idtask = tasksContainer.children.length;
    task.title = document.getElementById('inputTask').value;
    task.priority = document.getElementById('inputPriority').value;

    if (task.title != "" && task.priority != "") {

        toDoTasks.push(task);
        const taskTemplate = createTemplateTask(task);
        tasksContainer.appendChild(taskTemplate);
    }
})



function createTemplateTask(task) {
    const priorityClassName = todoBackgroundColorClases[task.priority.toLowerCase()]
    const div = document.createElement('div');
    const p = document.createElement('p');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.id = task.idtask;
    deleteButton.addEventListener('click', (event) => {
        div.remove()
    })

    p.textContent = task.title;
    div.className = 'task-item ' + priorityClassName;
    div.appendChild(p);
    div.appendChild(deleteButton);

    return div;
}







const tasksContainer = document.querySelector('.tasks');




for (let task of toDoTasks) {
    const taskTemplate = createTemplateTask(task);
    tasksContainer.appendChild(taskTemplate);

}


const searchPriority = document.getElementById('searchPriority')
const searchInput = document.getElementById('searchInput');

searchPriority.addEventListener('change', () => {
    searchAndFilter();
});

searchInput.addEventListener('input', () => {
    searchAndFilter();
})

function searchAndFilter() {
    const searchInputText = searchInput.value;
    const priority = searchPriority.value;
    if (!searchInputText || !priority) return;

    tasksContainer.innerHTML = toDoTasks
        .filter(task => task.title.includes(searchInput) && task.priority === priority)
        .map(task => createTemplateTask(task)).join(task.title, task.priority)

}

