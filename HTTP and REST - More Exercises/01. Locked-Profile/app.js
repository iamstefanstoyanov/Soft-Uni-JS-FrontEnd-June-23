function lockedProfile() {
    let main = document.getElementById('main');
    async function getProfiles(){
        let data =await (await fetch('http://localhost:3030/jsonstore/advanced/profiles')).json();
        let users = Object.values(data)
        users.forEach( x => {
            let username = x.username;
            let email = x.email;
            let age = x.age;
            let id = x._id;
            let profile = document.createElement('div');
            profile.className = 'profile';
            profile.innerHTML =`
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="${id}" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="${id}" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user1Username" value="${username}" disabled readonly />            
     `
            main.appendChild(profile)
            let hiddenContent = document.createElement('div');
            hiddenContent.className ='user1Username';
            hiddenContent.style.display = 'none';
            hiddenContent.innerHTML=`
             <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="${email}" disabled readonly />
            <label>Age:</label>
            <input type="text" name="user1Age" value="${age}" disabled readonly />`
            profile.appendChild(hiddenContent);
            let btn = document.createElement('button');
            btn.textContent = "Show more"
            profile.appendChild(btn);
        })
        loadBtns()
    }
    getProfiles()
    function loadBtns(){
        let btns = Array.from(document.querySelectorAll("button"));
        btns.forEach((button) => {
          button.addEventListener("click", (e) => {
            let locked = e.currentTarget.parentElement.querySelector(
              'input[type="radio"]'
            );
            if (locked.checked) {
              return;
            }
            let isHidden = e.currentTarget.textContent === "Show more";
            let hiddenInfo = e.currentTarget.parentElement.querySelector(".user1Username");
            hiddenInfo.style.display = isHidden ? "block" : "none";
            e.currentTarget.textContent = isHidden ? "Hide it" : "Show more";
          });
        });
    }
}
