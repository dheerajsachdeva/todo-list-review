import {tasks} from './index.js'

export default function completeTasks () {
    let incomplete = tasks.filter((task) => task.completed !== true);
    localStorage.setItem('tasks', JSON.stringify(incomplete));
    window.location.reload();
  };