function extractText() {
    let list = Array.from(document.querySelectorAll('li'));
    let res = list.map(e=>e.textContent).join('\n');
    document.getElementById('result').value = res;
}