// eslint-disable-next-line
import { tasks } from './crud.js';

export default function completeTasks() {
  const incomplete = tasks.filter((task) => task.completed !== true);
  tasks.length = 0;
  let i = 1;
  incomplete.forEach((element) => {
    element.id = i;
    i += 1;
  });
  localStorage.setItem('tasks', JSON.stringify(incomplete));
  window.location.reload();
}