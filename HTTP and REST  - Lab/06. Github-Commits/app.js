async function loadCommits() {
    const username = document.getElementById("username").value;
    const repo = document.getElementById("repo").value;
    const list = document.getElementById("commits");
    try {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repo}/commits`
      );
      if (res.ok == false) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      for (let {commit} of data) {
        list.innerHTML += `<li>${commit.author.name}: ${commit.message}</li>`;
      }
    } catch (e) {
      list.innerHTML = `Error: ${e.message}`;
    }
  }