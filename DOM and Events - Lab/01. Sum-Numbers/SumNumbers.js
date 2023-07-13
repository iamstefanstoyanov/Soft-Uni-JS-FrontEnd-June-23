function calc() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;

    let res = Number(x)+Number(y);

    document.getElementById('sum').value = res;
}
