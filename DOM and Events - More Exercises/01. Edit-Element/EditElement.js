function editElement(el,match,replacemant) {
    let text = el.textContent;
    let pattern = new RegExp(match, 'g');
    let res = text.replace(pattern, replacemant);
    el.textContent = res;
}