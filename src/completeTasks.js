// eslint-disable-next-line
import { tasks } from './index.js';

export default function completeTasks() {
  const incomplete = tasks.filter((task) => task.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(incomplete));
  window.location.reload();
}