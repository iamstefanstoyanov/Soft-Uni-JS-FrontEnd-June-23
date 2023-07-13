function addItem() {
    let text = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent=text;
    document.getElementById('items').appendChild(li);
    document.getElementById('newItemText').value='';
}