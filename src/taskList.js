class TaskList {
  constructor() {
    this.list = document.getElementById('tasks');
  }

  addTask(task) {
    this.list.appendChild(task.element);
  }

  removeTask(task) {
    this.list.removeChild(task.element);
  }
}
