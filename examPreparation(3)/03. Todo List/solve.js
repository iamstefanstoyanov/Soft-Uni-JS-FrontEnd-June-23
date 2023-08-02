function attachEvents() {
  let API_URL = 'http://localhost:3030/jsonstore/tasks/';

  let addBtn = document.querySelector('#add-button');
  let loadBtn = document.querySelector('#load-button');
  let toDoList = document.querySelector('#todo-list');
  let addTitleInput = document.querySelector('#title');
  loadBtn.addEventListener('click',loadTasks)
  addBtn.addEventListener('click',addTask)

  async function addTask(e){
    e.preventDefault();
    try {
        let task = { name: addTitleInput.value}
    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(task),
      });
      loadTasks();
      addTitleInput.value = "";
    } catch (e) {
        console.log(e.message);
    }
    
  }
  async function loadTasks(e){
    if (e) {
        e.preventDefault();
    }
    toDoList.innerHTML = '';
    try{
       let data = await (await fetch(API_URL)).json();
       let list = Object.values(data);
        list.forEach(item =>{
        let name = item.name;
        let id = item._id;
        let liEl = createElement('li',null,[],id,null);
        createElement('span',name,[],null,liEl)
        let removeBtn = createElement('button','Remove',[],null,liEl)
        removeBtn.addEventListener('click', remove)
        let editBtn = createElement('button','Edit',[],null,liEl)
        editBtn.addEventListener('click', edit)

        toDoList.appendChild(liEl)

       })
    }catch(e){
        console.log(e.message);
    }
  }
  async function remove(e){
    let id = e.currentTarget.parentNode.id;
    await fetch(`${API_URL}${id}`, {
        method: "DELETE",
      });
    loadTasks();
  }
  async function submit(e){
    let newName = e.target.parentElement.querySelector('input').value;
    let id = e.currentTarget.parentNode.id;
    try {
        let newData = { name:newName};
        await fetch(`${API_URL}${id}`, {
            method: "PATCH",
            body: JSON.stringify(newData),
          });
          loadTasks();
    } catch (e) {
        console.log(e.message);
    }

  }
  function edit(e){
    let currentEl = e.target.parentElement;
    currentEl.innerHTML = `
    <input value='${currentEl.querySelector("span").textContent}'/>
    <button id=${currentEl.id} class="remove-button">Remove</button>
    <button id=${currentEl.id} class="submit-button">Submit</button>`;
    currentEl.querySelector(".remove-button").addEventListener('click', remove)
    currentEl.querySelector(".submit-button").addEventListener('click', submit)

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

attachEvents();
