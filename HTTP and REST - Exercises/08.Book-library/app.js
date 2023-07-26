function attachEvents() {
  document.getElementById("loadBooks").addEventListener("click", loadBooks);
  async function loadBooks() {
    let data = await (
      await fetch("http://localhost:3030/jsonstore/collections/books")
    ).json();
    let listOfBooks = Object.entries(data);
    document.querySelector("table > tbody").innerHTML = "";
    listOfBooks.forEach((book) => {
      let bookid = book[0];
      let author = book[1].author;
      let title = book[1].title;
      createEl(bookid, author, title);
    });
    function createEl(bookid, author, title) {
      let tableBody = document.querySelector("table > tbody");
      let trEl = document.createElement("tr");
      trEl.setAttribute("id", bookid);
      let tdTitle = document.createElement("td");
      tdTitle.textContent = title;
      let tdAuthor = document.createElement("td");
      tdAuthor.textContent = author;

      let btnsTd = document.createElement("td");
      let editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      btnsTd.appendChild(editBtn);
      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      btnsTd.appendChild(deleteBtn);
      trEl.appendChild(tdTitle);
      trEl.appendChild(tdAuthor);
      trEl.appendChild(btnsTd);
      tableBody.appendChild(trEl);
      return;
    }
    deleteBtns();
    editBtns();
  }
  document
    .querySelector("#form > button")
    .addEventListener("click", createNewBook);
  async function createNewBook() {
    let title = document.querySelector('input[name="title"]').value;
    let author = document.querySelector('input[name="author"]').value;
    try {
      await fetch("http://localhost:3030/jsonstore/collections/books", {
        method: "POST",
        body: JSON.stringify({
          title,
          author,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (e) {}
    loadBooks();
    document.querySelector('input[name="title"]').value = "";
    document.querySelector('input[name="author"]').value = "";
  }
  function deleteBtns() {
    let delBtns = document.querySelectorAll(
      "tbody > tr > td > button:nth-child(2)"
    );
    delBtns.forEach((b) => {
      b.addEventListener("click", async (e) => {
        let currentEl = e.target.parentNode.parentNode.id;
        try {
          await fetch(
            `http://localhost:3030/jsonstore/collections/books/${currentEl}`,
            {
              method: "DELETE",
            }
          );
          loadBooks();
        } catch (e) {}
      });
    });
  }
  function editBtns() {
    let editBtns = document.querySelectorAll(
      "tbody > tr > td > button:first-child"
    );
    editBtns.forEach((b) => {
      b.addEventListener("click", (e) => {
        document.querySelector("h3").textContent = "Edit FORM";
        document.querySelector("#form > button").textContent = "Save";
        let currentEl = e.target.parentNode.parentNode.id;
        document.querySelector('input[name="title"]').value =
          e.target.parentNode.parentNode.children[0].textContent;
        document.querySelector('input[name="author"]').value =
          e.target.parentNode.parentNode.children[1].textContent;
        let newtitle = document.querySelector('input[name="title"]').value;
        let newauthor = document.querySelector('input[name="author"]').value;
        edit(currentEl,newtitle,newauthor);
      });
    });
  }
  async function edit(currentEl,newtitle,newauthor) {
    try {
      await fetch(
        `http://localhost:3030/jsonstore/collections/books/${currentEl}`,
        {
          method: "PUT",
          body: JSON.stringify({
            'author': newtitle,
            'title': newauthor,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      loadBooks();
    } catch (e) {}
  }
}

attachEvents();
