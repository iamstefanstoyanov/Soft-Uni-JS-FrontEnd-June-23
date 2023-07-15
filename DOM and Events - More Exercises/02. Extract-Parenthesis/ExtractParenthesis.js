function extract(content) {
  let text = document.getElementById(content).textContent;
  let res = "";
  let regExp = /\((.+?)\)/g;
  let found = regExp.exec(text);
  while (found != null) {
    res += found[1] + "; ";
    found = regExp.exec(text);
  }
  return res;
}