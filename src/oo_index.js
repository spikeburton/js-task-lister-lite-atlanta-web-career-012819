document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e.target.elements["new-task-description"].value)
    const description = e.target.elements["new-task-description"].value;
    const task = new Task(description);
    taskList.addTask(task);
  })
});
