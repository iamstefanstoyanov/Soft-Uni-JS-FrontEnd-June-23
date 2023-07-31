window.addEventListener("load", solve);

function solve() {
  let tasks = {};
  let inputs = {
    title: document.querySelector("#task-title"),
    category: document.querySelector("#task-category"),
    content: document.querySelector("#task-content"),
  };
  let selectors = {
    publishBtn: document.querySelector("#publish-btn"),
    reviewList: document.querySelector("#review-list"),
  };
  selectors.publishBtn.addEventListener("click", publishTask);
  
  
  function publishTask(e) {
    if (Object.values(inputs).some((input) => input.value === "")) {
      return;
    }
    let task = {
        id: `task-${Object.values(tasks).length + 1}`,
        title: inputs.title.value,
        category: inputs.category.value,
        content: inputs.content.value,
      };
      tasks[task.id] = task;

      let liEL = createElement('li',null,['rpost'],task.id,null);
      let articleEl = createElement('article',null,null,null,liEL);
      createElement('h4',task.title,null,null,articleEl);
      createElement('p',`Category: ${task.category}`,null,null,articleEl);
      createElement('p',`Content: ${task.content}`,null,null,articleEl);
      let editBtn = createElement('button','Edit',['action-btn','edit'],null,liEL);
      let postBtn = createElement('button','Post',['action-btn','post'],null,liEL);
      editBtn.addEventListener("click", editTask);
      postBtn.addEventListener("click", postTask);
      selectors.reviewList.appendChild(liEL);
    Object.values(inputs).forEach((input) => (input.value = ""));
}
  
  function postTask(e) {
    let currentTask = e.target.parentElement;
    let taskEl = document.querySelector(`#${currentTask.id}`);
    let title= document.querySelector(`#${currentTask.id} > article > h4`).textContent;
    let category = document.querySelector(`#${currentTask.id} > article > p`).textContent;
    let content = document.querySelector(`#${currentTask.id} > article > p:last-child`).textContent;
    let postedTasks = document.querySelector('#published-list')
    let liEL = createElement('li',null,['rpost'],currentTask.id,null);
      let articleEl = createElement('article',null,null,null,liEL);
      createElement('h4',title,null,null,articleEl);
      createElement('p',`Category: ${category}`,null,null,articleEl);
      createElement('p',`Content: ${content}`,null,null,articleEl);
    postedTasks.appendChild(liEL)
    taskEl.remove();
    delete tasks[currentTask.id];
  }
  function editTask(e) {
    let currentTask = e.target.parentElement.id;
    inputs.title.value = document.querySelector(`#${currentTask} > article > h4`).textContent;
    inputs.category.value = (document.querySelector(`#${currentTask} > article > p`).textContent).split(': ')[1];
    inputs.content.value = (document.querySelector(`#${currentTask} > article > p:last-child`).textContent).split(': ')[1];
    let taskEl = document.querySelector(`#${currentTask}`);
    taskEl.remove();
    delete tasks[currentTask];
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
}
