function mathOps(x, y, op) {
  let res;
  switch (op) {
    case "+":
      res = x + y;
      break;
    case "-":
      res = x - y;
      break;
    case "/":
      res = x / y;
      break;
    case "*":
      res = x * y;
      break;
    case "%":
      res = x % y;
      break;
    case "**":
      res = x ** y;
      break;
  }
  console.log(res);
}
