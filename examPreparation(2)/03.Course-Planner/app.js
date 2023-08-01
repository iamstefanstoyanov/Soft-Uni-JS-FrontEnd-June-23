function coursePlanner() {
    let API_URL = "http://localhost:3030/jsonstore/tasks/";
    let courseTypes = [
      'Long',
      'Medium',
      'Short',
  ];
  
    let btns = {
      loadCourses: document.getElementById("load-course"),
      addCourse: document.getElementById("add-course"),
      editCourseBtn: document.getElementById("edit-course"),
    };
    btns.loadCourses.addEventListener("click", loadCourses);
    let selectiors = {
      divList: document.getElementById("list"),
      formData: document.querySelector("#form form"),
    };
  
    let inputs = {
      courseName: document.getElementById("course-name"),
      courseType: document.getElementById("course-type"),
      description: document.getElementById("description"),
      teacherName: document.getElementById("teacher-name"),
    };
    selectiors.formData.addEventListener("submit", async (e) => {
      e.preventDefault();
      btns.addCourse.disabled = false;
      btns.editCourseBtn.disabled = true;
      let course = {
        title: e.target[0].value,
        teacher: e.target[3].value,
        type: e.target[1].value,
        description: e.target[2].value,
      };
      if (
        course.title == "" ||
        course.teacher == "" ||
        course.type == "" ||
        course.description == ""
      ) {
        return;
      }
      if (!courseTypes.includes(course.type)) {
          return;
      }
     
        await fetch(API_URL, {
          method: "POST",
          body: JSON.stringify(course),
        });      
      e.target[0].value = "";
        e.target[3].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        await loadCourses();
    });
  
    async function loadCourses() {
   
        let data = await (await fetch(API_URL)).json();
        selectiors.divList.innerHTML = "";
        Object.values(data).forEach((course) => {
          let title = course.title;
          let teacher = course.teacher;
          let type = course.type;
          let description = course.description;
          let id = course._id;
          let divContainer = createElement(
            "div",
            null,
            ["container"],
            id,
            null,
            null
          );
          createElement("h2", title, [], null, divContainer);
          createElement("h3", teacher, [], null, divContainer);
          createElement("h3", type, [], null, divContainer);
          createElement("h4", description, [], null, divContainer);
          let editBtn = createElement(
            "button",
            "Edit Course",
            ["edit-btn"],
            null,
            divContainer
          );
          editBtn.addEventListener("click", edit);
          let finishBtn = createElement(
            "button",
            "Finish Course",
            ["finish-btn"],
            null,
            divContainer
          );
          finishBtn.addEventListener("click", async (e) => {
            let id = e.target.parentNode.id;
          await fetch(`${API_URL}/${id}` , {
              method: 'DELETE',
          });
  
          await loadCourses();
      });
          selectiors.divList.appendChild(divContainer);
        });
    }
    async function edit(e) {
      let id = e.target.parentNode.id;
      btns.addCourse.disabled = true;
      btns.editCourseBtn.disabled = false;
  
        let data = await (await fetch(API_URL + id)).json();
        inputs.courseName.value = data.title;
        inputs.teacherName.value = data.teacher;
        inputs.courseType.value = data.type;
        inputs.description.value = data.description;
  
      e.target.parentNode.remove();
      await erase(id)
    }
    async function erase(id) {
  
        await fetch(`${API_URL}/${id}`, {
          method: "DELETE",
        });
      await loadCourses();
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
  coursePlanner();
  