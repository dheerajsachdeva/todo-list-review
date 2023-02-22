import './style.css';

let task = [
    {
        description : "Task1",
        completed : false,
        index : 1
    },
    {
        description : "Task2",
        completed : false,
        index : 2
    },
    {
        description : "Task3",
        completed : false,
        index : 3
    },
    
]


let list = document.querySelector('.list')


function displayData () {
task.forEach((task,index) => {
 let id = index+1;
 let listElement = document.createElement('li');
listElement.classList.add('listElement')
listElement.innerHTML = '<div class = "checkbox"><input type = "checkbox" class= "taskCompleted"></div>';
listElement.innerHTML += `<div class = "listText">${task.description}</div>`;
listElement.innerHTML +=  '<div class = "delete"><img src="https://img.icons8.com/material-rounded/24/null/menu-2.png"/></div>'
list.appendChild(listElement);

}); 
}
displayData();
















