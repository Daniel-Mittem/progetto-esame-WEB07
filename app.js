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

function editTask(id) {
    const nuovoNome = prompt("Modifica il nome dell'attività:");
    if (nuovoNome && nuovoNome.trim() !== "") {
      const task = tasks.find(t => t.id === id);
      if (task) task.nome = nuovoNome.trim();
      renderTasks();
    }
}

function changeStatus(id, nuovoStato) {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.stato = nuovoStato;
      renderTasks();
    }
}
  