// import './style.css';
const clear = document.querySelector('.refresh');

const storage = JSON.parse(localStorage.getItem('list'));
let index = 1;
const task = storage || [];

const list = document.querySelector('.list');
let innerHTML = "";
function addToDo() {
  task.forEach((task) => {
    innerHTML += `<li class = "item"><div class = "checkbox"><input type = "checkbox" class= "taskCompleted"></div><div class = "text">${task.description}</div><div class = "edit"><img src="https://img.icons8.com/material-outlined/24/null/pencil--v1.png"/></div> 
  <div class = "delete"><img src="https://img.icons8.com/material-sharp/24/null/waste.png"/></div> </li>`
  });
  list.innerHTML = innerHTML;
}

const input = document.querySelector('#input');
input.addEventListener('keyup', (e) => {
  innerHTML = "";
  if (e.key == 'Enter') {
    const toDo = input.value;
    if (toDo) {
      // addToDo(toDo, index, false);
      task.push({
        description: toDo,
        index: index,
        completed: false
      });
      input.value = "";
      index++;
      const myList = JSON.stringify(task);
      localStorage.setItem('list', myList);

    } else {
      alert("Add text in List");
    }addToDo();
  }index++;
})
addToDo();

list.addEventListener('click', (e)=>
{
console.log(e.target)


})










