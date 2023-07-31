function attachEvents() {
  document
    .querySelector("#load-board-btn")
    .addEventListener("click", loadTasks);
  document
    .querySelector("#create-task-btn")
    .addEventListener("click", createTask);
  let tasksSections = {
    ToDo: document.querySelector("#todo-section .task-list"),
    "In Progress": document.querySelector("#in-progress-section .task-list"),
    "Code Review": document.querySelector("#code-review-section .task-list"),
    Done: document.querySelector("#done-section .task-list"),
  };
  let API_URL = "http://localhost:3030/jsonstore/tasks/";
  let tasks = {};
  let statustoNext = {
    ToDo: "In Progress",
    "In Progress": "Code Review",
    "Code Review": "Done",
    Done: "Close",
  };
  let inputs = {
    title: document.querySelector("#title"),
    description: document.querySelector("#description"),
  };
  async function loadTasks() {
    try {
      tasks = await (await fetch(API_URL)).json();
      Object.values(tasksSections).forEach(
        (section) => (section.textContent = "")
      );
      Object.values(tasks).forEach((task) => {
        let section = tasksSections[task.status];
        let item = createElement("li", null, ["task"], null, section);
        createElement("h3", task.title, [], null, item);
        createElement("p", task.description, [], null, item);
        let button = createElement(
          "button",
          statustoNext[task.status] === "Close"
            ? "Close"
            : `Move to ${statustoNext[task.status]}`,
          [],
          task._id,
          item
        );
        button.addEventListener("click", moveTask);
      });
    } catch (e) {}
  }
  async function createTask() {
    try {
      if (Object.values(inputs).some((selector) => selector.value === "")) {
        return;
      }
      let task = {
        title: inputs.title.value,
        description: inputs.description.value,
        status: "ToDo",
      };
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(task),
      });
      loadTasks();
      inputs.title.value = "";
      inputs.description.value = "";
    } catch (e) {}
  }
  function createElement(type, textContent, classes, id, parent) {
    let element = document.createElement(type);
    if (textContent) {
      element.textContent = textContent;
    }
    if (classes && classes.length > 0) {
      element.classList.add(...classes);
    }
    if (id) {
      element.setAttribute("id", id);
    }
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
  async function moveTask(e) {
    try {
      let task = tasks[e.currentTarget.getAttribute("id")];
      let method = "PATCH";
      let body = JSON.stringify({
        ...task,
        status: statustoNext[task.status],
      });
      if (task.status === "Done") {
        method = "DELETE";
        body = undefined;
      }
      fetch(`${API_URL}/${task._id}`, {
        method,
        body,
      });
      loadTasks();
    } catch (e) {}
  }
}

attachEvents();
