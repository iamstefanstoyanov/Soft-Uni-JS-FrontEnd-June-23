let API_URL = "http://localhost:3030/jsonstore/tasks/";
let inputs = {
  name: document.querySelector("#name"),
  numDays: document.querySelector("#num-days"),
  date: document.querySelector("#from-date"),
};
let btns = {
  loadVacBtn: document.querySelector("#load-vacations"),
  addVac: document.querySelector("#add-vacation"),
  editVac: document.querySelector("#edit-vacation"),
};
let selectors = {
  divList: document.querySelector("#list"),
};

btns.loadVacBtn.addEventListener("click", loadAllVacations);
btns.addVac.addEventListener("click", addVac);

async function addVac(e) {
  e.preventDefault(e)
  if (Object.values(inputs).some((input) => input.value === "")) {
    return;
  }
  try {
    let currentVac = {
      name: inputs.name.value,
      days: inputs.numDays.value,
      date: inputs.date.value,
    };

    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(currentVac),
    });

    await loadAllVacations();
    clear();
  } catch (error) {
    console.log(error.message);
  }
}

async function loadAllVacations() {
  selectors.divList.innerHTML = "";
  btns.addVac.disabled = false;
  btns.editVac.disabled = true;
  try {
    let data = await (await fetch(API_URL)).json();
    let list = Object.values(data);
    list.forEach((i) => {
      let name = i.name;
      let days = i.days;
      let date = i.date;
      let id = i._id;
      let divContainer = createElement("div", null, ["container"], null, null);
      createElement("h2", name, [], null, divContainer);
      createElement("h3", date, [], null, divContainer);
      createElement("h3", days, [], null, divContainer);
      let changeBtn = createElement(
        "button",
        "Change",
        ["change-btn"],
        id,
        divContainer
      );
      changeBtn.addEventListener("click", editVac);
      let doneBtn = createElement(
        "button",
        "Done",
        ["done-btn"],
        id,
        divContainer
      );
      doneBtn.addEventListener("click", async (e) => {
        await fetch(`${API_URL}${doneBtn.id}`, {
          method: "DELETE",
        });
        await loadAllVacations();
      });
      selectors.divList.appendChild(divContainer);
    });
  } catch (error) {
    console.log(error);
  }
}
function editVac(e){
    btns.addVac.disabled = true;
    btns.editVac.disabled = false;
    let id = e.target.id;
    e.target.parentElement.remove();
    inputs.name.value = e.target.parentElement.children[0].textContent
    inputs.numDays.value= Number(e.target.parentElement.children[2].textContent)
    inputs.date.value  = e.target.parentElement.children[1].textContent
    btns.editVac.addEventListener('click', async (e) =>{
      if(e){
        e.preventDefault()
      }
        try {
            let newItem = {
                name:inputs.name.value,
                days:inputs.numDays.value,
                date:inputs.date.value,
                _id:id,
            };
            await fetch(`${API_URL}${newItem._id}`, {
              method: "PUT",
              body: JSON.stringify(newItem),
            });
            clear();
            await loadAllVacations();
          } catch (error) {
            console.log(error);
          }
    })
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
function clear() {
  inputs.name.value = "";
  inputs.numDays.value = "";
  inputs.date.value = "";
}
