// eslint-disable-next-line
import completeTasks from './interactive.js';

export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export const todoForm = document.querySelector('#todo-form');
export const todoList = document.querySelector('.todos');
export const clearAll = document.querySelector('#completed-tasks');
export const mainInput = document.querySelector('#todo-form input');

function createTask(task) {
  const taskEl = document.createElement('li');
  taskEl.setAttribute('id', task.id);
  taskEl.classList.add('item');
  if (task.completed) {
    taskEl.classList.add('complete');
  }
  const innerHTML = `<div class = "list"> <input class = "checkbox" type = "checkbox" id = "${task.id}" ${task.completed ? 'checked' : ''} name = "tasks" class= "taskCompleted">
    <span class = "text" ${!task.completed ? 'contenteditable' : ''}> 
    ${task.description}</span> </div>
  <div class = "remove-task"><img src="https://img.icons8.com/material-sharp/24/null/waste.png"/></div>`;

  taskEl.innerHTML = innerHTML;
  todoList.appendChild(taskEl);
}

if (localStorage.getItem('tasks')) {
  tasks.map((task) => {
    createTask(task);
    return task;
  });
}
// Getting value from User
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = mainInput.value;
  if (inputValue === '') {
    return;
  }
  const task = {
    id: tasks.length + 1,
    description: inputValue,
    completed: false,
  };
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  createTask(task);
  todoForm.reset();
});

const removeTask = ((taskid) => {
  // eslint-disable-next-line
    let remove = tasks.filter((task) => task.id !== parseInt(taskid));
  tasks.length = 0;
  let i = 1;
  remove.forEach((element) => {
    element.id = i;
    i += 1;
  });
  localStorage.setItem('tasks', JSON.stringify(remove));
  document.getElementById(taskid).remove();
  window.location.reload();
});

const editTask = ((taskid, el) => {
  // eslint-disable-next-line
    const task = tasks.find((task) => parseInt(taskid) === task.id);
  if (el.hasAttribute('contenteditable')) {
    task.description = el.textContent;
  } else {
    const span = el.nextElementSibling;
    const parent = el.closest('li');
    task.completed = !task.completed;
    if (task.completed) {
      span.removeAttribute('contenteditable');
      parent.classList.add('complete');
    } else {
      span.setAttribute('contenteditable', 'true');
      parent.classList.remove('complete');
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
});

todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-task') || e.target.parentElement.classList.contains('remove-task')) {
    const taskid = e.target.closest('li').id;
    removeTask(taskid);
  }
});

todoList.addEventListener('input', (e) => {
  const taskid = e.target.closest('li').id;
  editTask(taskid, e.target);
});

clearAll.addEventListener('click', () => {
  completeTasks();
});
