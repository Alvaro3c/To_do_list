/* funcion para crear una estructura
*
*/
function createTemplateTask(task) {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Eliminar'
    deleteButton.id = task.idtask
    p.textContent = task.title
    div.className = 'task-item'
    div.appendChild(p)
    div.appendChild(deleteButton)
    return div
}


const tasksContainer = document.querySelector('.tasks')

for (let task of toDoTasks) {
    const taskTemplate = createTemplateTask(task)
    tasksContainer.appendChild(taskTemplate)
}