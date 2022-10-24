const todoBackgroundColorClases = {
    'urgente': 'urgent',
    'diaria': 'daily',
    'mensual': 'monthly'
}
const buttonSave = document.getElementById('buttonSave');

buttonSave.addEventListener('click', (event) => {

    event.preventDefault(); // prevents the default behaviour of the button (prvents refreshing the page)

    let task = {};
    task.idtask = tasksContainer.children.length;
    task.title = document.getElementById('inputTask').value;
    task.priority = document.getElementById('inputPriority').value;

    if (task.title != "" && task.priority != "") {
        // if the user has entered a title and has chosen a priority
        toDoTasks.push(task);
        const taskTemplate = createTemplateTask(task);
        tasksContainer.appendChild(taskTemplate);
    }
})


/* 1.funcion para crear una estructura; creamos un div, p y boton; introducimos texto en el boton ya que es generico; asociamos el boton al id del array llamado idtask, ya que se de eso depende. Asociamos el contenido del texto dentro del p al title. TASK ES UNA TAREA. Damos una clase al div que va a contener el p y el boton para los estilos de CSS. le decimos que el div contiene la p y el boton. pedimos que retorne todo lo que hemos hecho
*
*/
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






/* creamos la constante taskContainer para asignar el espacio donde queremos que se ejecute la funcion createTemplateTask

*/
const tasksContainer = document.querySelector('.tasks');


/* recorremos el array, la otra opcion es pintarlo todo uno mismo, y no es practico. creamos la constante taskTemplate que es igual a la funcion que hemos hecho arriba . Con task container 

*/

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
        .filter(task => task.title.includes(searchInput) && task.priority === priority) // TODO change the condition to only filter out the provided values, for example if user does not provide priority there is no need on checking if priorities matches and the same for the text title. It will be a good idea to do this check in a variable that can be reuse inside the filter function.
        .map(task => createTemplateTask(task)).join(',')

}

