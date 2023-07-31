window.addEventListener("load", solve);

function solve() {
  let tasks = {};
  let inputSelectors = {
    title: document.querySelector("#title"),
    description: document.querySelector("#description"),
    label: document.querySelector("#label"),
    points: document.querySelector("#points"),
    assignee: document.querySelector("#assignee"),
  };
  let icons = {
    Feature: "&#8865",
    "Low Priority Bug": "&#9737",
    "High Priority Bug": "&#9888",
  };
  let labelClasses = {
    Feature: "feature",
    "Low Priority Bug": "low-priority",
    "High Priority Bug": "high-priority",
  };
  let selectors = {
    createBtn: document.querySelector("#create-task-btn"),
    taskSection: document.querySelector("#tasks-section"),
    deleteBtn: document.querySelector("#delete-task-btn"),
    totalSprintPoints: document.querySelector("#total-sprint-points"),
    hiddenTaskId: document.querySelector("#task-id"),
  };

  selectors.createBtn.addEventListener("click", createTask);
  selectors.deleteBtn.addEventListener("click", deleteTask);
  function deleteTask(){
    let taskId = selectors.hiddenTaskId.value;
    let taskEl = document.querySelector(`#${taskId}`);
    taskEl.remove();
    delete tasks[taskId];
    Object.values(inputSelectors).forEach(selector => {
        selector.value = '';
        selector.disabled = false;
        
    })
    selectors.createBtn.disabled = false;
    selectors.deleteBtn.disabled = true;
    calculateTotalPoints()
  }
  function createTask(e) {
    if (
      Object.values(inputSelectors).some((selector) => selector.value === "")
    ) {
      return;
    }
    let task = {
      id: `task-${Object.values(tasks).length + 1}`,
      title: inputSelectors.title.value,
      description: inputSelectors.description.value,
      label: inputSelectors.label.value,
      points: Number(inputSelectors.points.value),
      assignee: inputSelectors.assignee.value,
    };
    tasks[task.id] = task;

    let article = createElement("article", null, ["task-card"], task.id);
    createElement(
      "div",
      `${task.label} ${icons[task.label]}`,
      ["task-card-label", labelClasses[task.label]],
      null,
      article,
      true
    );
    createElement("h3", task.title, ["task-card-title"], null, article);
    createElement(
      "p",
      task.description,
      ["task-card-description"],
      null,
      article
    );
    createElement(
      "div",
      `Estimated at ${task.points} pts`,
      ["task-card-points"],
      null,
      article
    );
    createElement(
      "div",
      `Assigned to: ${task.assignee}`,
      ["task-card-assignee"],
      null,
      article
    );
    let taskActions = createElement(
      "div",
      null,
      ["task-card-actions"],
      null,
      article
    );
    let button = createElement("button", "Delete", [], null, taskActions);
    button.addEventListener("click", loadDeleteConfirm);
    selectors.taskSection.appendChild(article);


    calculateTotalPoints()
    Object.values(inputSelectors).forEach((selector) => (selector.value = ""));
  }
  function calculateTotalPoints(){

    let totalPoints = Object.values(tasks).reduce(
      (acc, curr) => acc + curr.points,
      0
    );
    selectors.totalSprintPoints.textContent = `Total Points ${totalPoints}pts`;
  }
  function createElement(type, textContent, classes, id, parent, useInnerHtml) {
    let element = document.createElement(type);
    if (useInnerHtml && textContent) {
      element.innerHTML = textContent;
    } else if (textContent) {
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

  function loadDeleteConfirm(e) {
    let taskId = e.currentTarget.parentElement.parentElement.getAttribute("id");
    Object.keys(inputSelectors).forEach(key => {
        let selector = inputSelectors[key];
        selector.value = tasks[taskId][key];
        selector.disabled = true
    })
    
    selectors.hiddenTaskId.value = taskId;
    selectors.createBtn.disabled = true;
    selectors.deleteBtn.disabled = false;
  }
}
