const taskInput = document.getElementById("taskInput");
const taskList  = document.getElementById("taskList");
const emptyMsg  = document.getElementById("emptyMsg");

// 1. Add a task dynamically
function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;
  span.onclick = function () { toggleTask(li); };

  const doneBtn = document.createElement("button");
  doneBtn.className = "done-btn";
  doneBtn.textContent = "Done";
  doneBtn.onclick = function () { toggleTask(li); };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () { deleteTask(li); };

  const buttons = document.createElement("div");
  buttons.appendChild(doneBtn);
  buttons.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttons);
  taskList.appendChild(li);

  taskInput.value = "";
  checkEmpty();
}

// 2. Update task status (completed / not completed)
function toggleTask(li) {
  li.classList.toggle("completed");
  const btn = li.querySelector(".done-btn");
  btn.textContent = li.classList.contains("completed") ? "Undo" : "Done";
}

// 3. Remove a task from the list
function deleteTask(li) {
  li.remove();
  checkEmpty();
}

// Show message when list is empty
function checkEmpty() {
  emptyMsg.style.display = taskList.children.length === 0 ? "block" : "none";
}

// Press Enter to add a task
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});
