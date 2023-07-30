async function solution() {
  let main = document.querySelector("#main");
  let data = await fetch(
    "http://localhost:3030/jsonstore/advanced/articles/list"
  );
  let articles = await data.json();

  articles.map(createArticle).forEach((a) => main.appendChild(a));
}

solution();

function createArticle({ _id, title }) {
  let content = null;
  let more = false;

  let element = document.createElement("div");
  element.className = "accordion";
  element.innerHTML = `
    <div class="head">
        <span>${title}</span>
        <button class="button" id="${_id}">More</button>
    </div>
    <div class="extra" style="display: none;">
        <p></p>
    </div>`;

  let extra = element.querySelector(".extra");
  let btn = element.querySelector("button");
  btn.addEventListener("click", toggleMore);

  return element;

  async function toggleMore() {
    if (content == null) {
      let data = await fetch(
        "http://localhost:3030/jsonstore/advanced/articles/details/" + _id
      );
      let article = await data.json();
      content = article.content;
      extra.innerHTML = `<p>${content}</p>`;
    }
    if (more) {
      more = false;
      btn.textContent = "More";
      extra.style.display = "none";
    } else {
      more = true;
      btn.textContent = "Less";
      extra.style.display = "block";
    }
  }
}
