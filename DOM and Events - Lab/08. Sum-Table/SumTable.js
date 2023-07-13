function sumTable() {
    let numbers = Array.from(document.querySelectorAll('tr')).slice(1, -1);
    let sum = 0;
    for(let n of numbers) {
        let num = Number(n.lastElementChild.textContent);
        sum+=Number(num);
    }
    document.getElementById('sum').textContent = sum
}