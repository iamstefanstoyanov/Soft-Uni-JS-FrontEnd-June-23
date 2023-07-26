function attachEvents() {
  window.onload = getStudents;
  async function getStudents() {

    let data = await (
      await fetch("http://localhost:3030/jsonstore/collections/students")
    ).json();
    let list = Object.values(data);
    let tableBody = document.querySelector("#results > tbody");
    tableBody.innerHTML ='';
    list.forEach((student) => {
      let fname = student.firstName;
      let lname = student.lastName;
      let fnumber = student.facultyNumber;
      let grade = Number(student.grade);
      
      let rowEl = document.createElement("tr");
      let cellFnameEl = document.createElement("td");
      let cellLnameEl = document.createElement("td");
      let cellFnumEl = document.createElement("td");
      let cellgradeEl = document.createElement("td");
      cellFnameEl.textContent = fname;
      cellLnameEl.textContent = lname;
      cellFnumEl.textContent = fnumber;
      cellgradeEl.textContent = grade;
      rowEl.appendChild(cellFnameEl);
      rowEl.appendChild(cellLnameEl);
      rowEl.appendChild(cellFnumEl);
      rowEl.appendChild(cellgradeEl);
      tableBody.appendChild(rowEl);
    });
  }
  document.getElementById("submit").addEventListener("click", createStudent);
  async function createStudent() {
    let inputs = document.querySelectorAll("input[type=text]");
    let fname = inputs[0].value;
    let lname = inputs[1].value;
    let facNumber = Number(inputs[2].value);
    let grade = Number(inputs[3].value);
    if(fname===''||lname===''){
      throw new Error (console.log('All fields are required!'))
    }
    if(isNaN(facNumber)||isNaN(grade)||facNumber<=0 ||grade<=0){
      throw new Error (console.log('Faculty number and grade should be a positive number'))
    }
    try {
      await fetch("http://localhost:3030/jsonstore/collections/students", {
        method: "POST",
        body: JSON.stringify({
          firstName: fname,
          lastName: lname,
          facultyNumber: facNumber,
          grade: grade,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      getStudents();
      inputs.forEach(x=>x.value='');
    } catch (e) {
    }
  }
}

attachEvents();
