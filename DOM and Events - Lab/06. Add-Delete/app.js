function addItem() {
  let input = document.getElementById("newItemText").value;
  let newEl = document.createElement("li");
  newEl.textContent = input;
  let delBtn = document.createElement("a");
  delBtn.textContent = "[Delete]";
  delBtn.href = "#";
  newEl.appendChild(delBtn);
  delBtn.addEventListener("click", onDelete);
  document.getElementById("items").appendChild(newEl);
  document.getElementById("newItemText").value = "";

  function onDelete(event) {
    event.target.parentElement.remove();
  }
}
