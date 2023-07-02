function modification(n) {
  let numbers = String(n).split("").map((x) => (x = Number(x)));
  let avg = numbers.reduce((x, y) => x + y) / numbers.length;
  while (avg < 5) {
    numbers.push(9);
    avg = numbers.reduce((x, y) => x + y) / numbers.length;
  }
  console.log(numbers.join(''));
}
modification(101);
modification(5835);
