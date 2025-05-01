let tasks = [];

function addTask() {
  const input = document.getElementById('taskInput');
  const nome = input.value.trim();
  if (nome === "") return;

  tasks.push({
    id: Date.now(),
    nome,
    stato: "Da fare"
  });

  input.value = "";
  renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
  }