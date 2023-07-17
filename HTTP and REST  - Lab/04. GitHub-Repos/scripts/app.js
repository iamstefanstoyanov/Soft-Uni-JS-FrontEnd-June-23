async function loadRepos() {
   let response = await fetch("https://api.github.com/users/testnakov/repos");
   let data = await response.json();
   document.getElementById('res').textContent = JSON.stringify(data);
}