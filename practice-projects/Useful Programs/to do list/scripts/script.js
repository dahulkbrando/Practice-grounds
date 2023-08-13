// Model section
let todos = JSON.parse(localStorage.getItem('myList')) || [{
    title: 'earn $250,000 annually',
    dueDate: '2025-06-01',
    id: 'make250K',
    complete: false
},{
    title: 'generate $5000 passive income monthly',
    dueDate: '2027-06-24',
    id: 'passive-income',
    complete: false
},{
    title: 'own 3 houses',
    dueDate: '2030-03-05',
    id: 'real-estate',
    complete: false
},{
    title: 'own a million dollar company',
    dueDate: '2027-06-24',
    id: 'a-milli',
    complete: false
},{
    title: 'take the FE exam',
    dueDate: '2023-10-15',
    id: 'EIT',
    complete: false
},{
    title: 'take the PE exam',
    dueDate: '2028-04-01',
    id: 'Professional',
    complete: false
},{
    title: 'build a task list webapp',
    dueDate: '2023-08-15',
    id: 'task-list-working',
    complete: true
}];

function createTodo(title,dueDate){
    const id = '' + new Date().getTime();

    todos.push({
        title: title, 
        dueDate: dueDate,
        id: id,
        complete: false
    });
}

function removeTodo(idToDelete){
    todos = todos.filter(function(todo){
        return !(todo.id === idToDelete);
    });
}

function saveTodos(){
    localStorage.setItem('myList', JSON.stringify(todos))
}


// View section
displayList();

function displayList(){
    const todoList = document.getElementById("todo-list-display");
    todoList.innerHTML = '';
    todos.forEach(function(todoItem){
        let element = document.createElement('div');
        element.innerText ='\t' + todoItem.title + ' ' + todoItem.dueDate;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete Item';
        deleteBtn.id = todoItem.id;
        deleteBtn.style = 'margin-left: 12px';
        deleteBtn.onclick = deleteTodo;

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';

        element.prepend(checkBox);
        element.appendChild(deleteBtn);
        todoList.appendChild(element);
    });
}


// Controller section
function deleteTodo(event){
    const deleteBtn = event.target;
    const idToDelete = deleteBtn.id;

    removeTodo(idToDelete);
    displayList();
}

function addTodo(){
    const textbox =  document.getElementById('todo-title');
    const title = textbox.value;

    const datePicker = document.getElementById('todo-date');
    const dueDate = datePicker.value;
    
    createTodo(title, dueDate);
    displayList();
}