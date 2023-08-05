window.addEventListener("load", solve);

function solve() {
  let inputs = {
    student: document.querySelector("#student"),
    university: document.querySelector("#university"),
    score: document.querySelector("#score"),
  };
  let selectors = {
    nextBtn: document.querySelector("#next-btn"),
    reviewList: document.querySelector("#preview-list"),
    candidatesList: document.querySelector("#candidates-list"),
  };
  selectors.nextBtn.addEventListener("click", apply);
  function apply() {
    if (Object.values(inputs).some((input) => input.value === "")) {
      return;
    }
    let items = {
      student: inputs.student.value,
      university: inputs.university.value,
      score: inputs.score.value,
    };
    let liEL = createElement('li',null,['application'],null,null);
      let articleEl = createElement('article',null,null,null,liEL);
      createElement('h4',items.student,null,null,articleEl);
      createElement('p',`University: ${items.university}`,null,null,articleEl);
      createElement('p',`Score: ${items.score}`,null,null,articleEl);
      let editBtn = createElement('button','Edit',['action-btn','edit'],null,liEL);
      let applyBtn = createElement('button','Post',['action-btn','apply'],null,liEL);
      editBtn.addEventListener("click", editItem);
      applyBtn.addEventListener("click", applyItem);
      selectors.reviewList.appendChild(liEL);
      selectors.nextBtn.disabled = true;
      cleanInputs();
  }
  function editItem(e) {
    let currentItem = e.target.parentElement;
    inputs.student.value = currentItem.children[0].children[0].textContent;
    inputs.university.value = currentItem.children[0].children[1].textContent.split(' ')[1];
    inputs.score.value = currentItem.children[0].children[2].textContent.split(' ')[1];
    selectors.nextBtn.disabled = false;
    currentItem.remove();
  }
  function applyItem(e) {
    let currentItem = e.target.parentElement;
    let btn1 = currentItem.children[1]
    let btn2 = currentItem.children[2]
    currentItem.removeChild(btn1)
    currentItem.removeChild(btn2)
    selectors.candidatesList.appendChild(currentItem);
    selectors.nextBtn.disabled = false;

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
  function cleanInputs(e){
    Object.values(inputs).forEach((input) => (input.value = ""));
  }
}
  