function calc(a, b, op) {
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;

  switch (op) {
    case "multiply":
      return multiply(a, b);

    case "divide":
      return divide(a, b);

    case "add":
      return add(a, b);

    case "subtract":
      return subtract(a, b);
  }
}
