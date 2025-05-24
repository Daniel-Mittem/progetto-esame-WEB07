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

function renderTasks() {
    const list = document.getElementById('taskList');
    const search = document.getElementById('searchInput').value.toLowerCase();
    const filter = document.getElementById('filterStatus').value;
  
    list.innerHTML = "";
  
    const filteredTasks = tasks
      .filter(t => t.nome.toLowerCase().includes(search))
      .filter(t => filter === "" || t.stato === filter);
  
    filteredTasks.forEach(task => {
      const div = document.createElement('div');
      div.className = 'task';
  
      div.innerHTML = `
        <span>${task.nome} - <strong>${task.stato}</strong></span>
        <select onchange="changeStatus(${task.id}, this.value)">
          <option value="Da fare" ${task.stato === "Da fare" ? "selected" : ""}>Da fare</option>
          <option value="In corso" ${task.stato === "In corso" ? "selected" : ""}>In corso</option>
          <option value="Completata" ${task.stato === "Completata" ? "selected" : ""}>Completata</option>
        </select>
        <button onclick="editTask(${task.id})">Modifica</button>
        <button onclick="deleteTask(${task.id})">Elimina</button>
        `;
  
      list.appendChild(div);
    });
  }