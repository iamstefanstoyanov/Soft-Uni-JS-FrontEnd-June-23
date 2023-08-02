window.addEventListener("load", solve);

function solve() {
  let inputs = {
    firstName: document.querySelector("#first-name"),
    lastName: document.querySelector("#last-name"),
    age: document.querySelector("#age"),
    title: document.querySelector("#story-title"),
    genre: document.querySelector("#genre"),
    story: document.querySelector("#story"),
  };
  let btns = {
    publishBtn: document.querySelector("#form-btn"),
  };
  let selectors = {
    previewList: document.querySelector("#preview-list"),
    main:document.querySelector("#main"),
  };
  let saved ={};
  btns.publishBtn.addEventListener("click", publish);
  function publish(e) {
    e.preventDefault();
    let fname = inputs.firstName.value;
    let lName = inputs.lastName.value;
    let age = inputs.age.value;
    let title = inputs.title.value;
    let story = inputs.story.value;
    let genre = inputs.genre.value;
    saved = {fname,lName,age,title,story,genre}
    if (fname == "" || lName == "" || age == "" || title == "" || story == "") {
      return;
    }
    let liEl = createElement("li", null, ["story-info"], null, null);
    let article = createElement("article", null, [], null, null);
    createElement("h4", `Name: ${fname} ${lName}`, [], null, article);
    createElement("p", `Age: ${age}`, [], null, article);
    createElement("p", `Title: ${title}`, [], null, article);
    createElement("p", `Genre: ${genre}`, [], null, article);
    createElement("p", story, [], null, article);
    liEl.appendChild(article);
    let saveBtn = createElement(
      "button",
      "Save Story",
      ["save-btn"],
      null,
      liEl
    );
    saveBtn.addEventListener("click", saveStory);
    let editBtn = createElement(
      "button",
      "Edit Story",
      ["edit-btn"],
      null,
      liEl
    );
    editBtn.addEventListener("click", editStory);
    let deleteBtn = createElement(
      "button",
      "Delete Story",
      ["delete-btn"],
      null,
      liEl
    );
    deleteBtn.addEventListener("click", deleteStory);
    selectors.previewList.appendChild(liEl);
    inputs.firstName.value = "";
    inputs.lastName.value = "";
    inputs.age.value = "";
    inputs.title.value = "";
    inputs.story.value = "";
    btns.publishBtn.disabled = true;
  }
  function saveStory(e) {
    selectors.main.innerHTML ='';
    createElement('h1','Your scary story is saved!',[],null,selectors.main)
  }
  function editStory(e) {
    
    inputs.firstName.value = saved.fname
    inputs.lastName.value = saved.lName
    inputs.age.value = saved.age
    inputs.title.value = saved.title
    inputs.genre.value = saved.genre
    inputs.story.value = saved.story
    e.target.parentNode.remove()
    btns.publishBtn.disabled = false;
    
  }
  function deleteStory(e) {
    e.target.parentNode.remove()
    btns.publishBtn.disabled = false;
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
