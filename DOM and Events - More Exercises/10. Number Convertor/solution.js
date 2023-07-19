function solve() {
  let html = {
    numberField: document.getElementById("input"),
    convertTo: document.getElementById("selectMenuTo"),
    output: document.getElementById("result"),
    button: document.querySelector("#container > button"),
  };
  let makeOptions = (arr) =>
    arr.map((x) => {
      let option = document.createElement("option");
      x = x.toLocaleLowerCase();
      option.value = x;
      option.text = `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`;
      return option;
    });
  let print = (n) => (html.output.value = n);
  makeOptions(["binary", "hexadecimal"]).forEach((x) => html.convertTo.add(x));

  function convert(to, n) {
    n = Number(n) || 0;
    let formats = {
      binary: (n) => (n >>> 0).toString(2),
      hexadecimal: (n) => n.toString(16).toLocaleUpperCase(),
    };

    return formats[to](n);
  }

  html.button.addEventListener("click", () =>
    print(convert(html.convertTo.value, html.numberField.value))
  );
}
