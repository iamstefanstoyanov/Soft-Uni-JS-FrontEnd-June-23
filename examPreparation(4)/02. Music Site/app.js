window.addEventListener("load", solve);

function solve() {
  let inputs = {
    genre: document.querySelector("#genre"),
    name: document.querySelector("#name"),
    author: document.querySelector("#author"),
    date: document.querySelector("#date"),
  };
  let btns = {
    addBtn: document.querySelector("#add-btn"),
    likeBtn: document.querySelector(".like-btn"),
  };

  btns.addBtn.addEventListener("click", addSong);

  let selectors = {
    allHitsContainer: document.querySelector(".all-hits-container"),
    likes: document.querySelector(".likes p"),
    savedContainer: document.querySelector(".saved-container"),
  };
  let likes = 0;
  function addSong(e) {
    e.preventDefault();
    let genre = inputs.genre.value.trim();
    let name = inputs.name.value.trim();
    let author = inputs.author.value.trim();
    let date = inputs.date.value.trim();
    if (genre == "" || name == "" || author == "" || date == "") {
      return;
    }
    let hitInfo = createElement("div", null, ["hits-info"], null, null, null);
    createElement("img", null, null, null, hitInfo, "./static/img/img.png");
    createElement("h2", `Genre: ${genre}`, null, null, hitInfo, null);
    createElement("h2", `Name: ${name}`, null, null, hitInfo, null);
    createElement("h2", `Author: ${author}`, null, null, hitInfo, null);
    createElement("h3", `Date: ${date}`, null, null, hitInfo, null);
    let saveBtn = createElement(
      "button",
      "Save song",
      ["save-btn"],
      null,
      hitInfo,
      null
    );
    saveBtn.addEventListener("click", saveSong);
    let likeBtn = createElement(
      "button",
      "Like song",
      ["like-btn"],
      null,
      hitInfo,
      null
    );
    likeBtn.addEventListener("click", likeSong);
    let deleteBtn = createElement(
      "button",
      "Delete",
      ["delete-btn"],
      null,
      hitInfo,
      null
    );
    deleteBtn.addEventListener("click", deleteSong);
    inputs.genre.value = "";
    inputs.name.value = "";
    inputs.author.value = "";
    inputs.date.value = "";
    selectors.allHitsContainer.appendChild(hitInfo);
  }
  function saveSong(e) {
    let currentSong = e.target.parentElement;
    let saveBtn = e.target.parentElement.children[5];
    let likeBtn = e.target.parentElement.children[6];
    currentSong.removeChild(saveBtn);
    currentSong.removeChild(likeBtn);
    selectors.savedContainer.appendChild(currentSong);
  }
  function likeSong(e) {
    likes++;
    selectors.likes.textContent = `Total Likes: ${likes}`;
    e.target.disabled = true;
  }
  function deleteSong(e) {
    let currentSong = e.target.parentElement;
    currentSong.remove();
  }
  function createElement(type, textContent, classes, id, parent, src) {
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
    if (src) {
      element.setAttribute("src", src);
    }
    return element;
  }
}
