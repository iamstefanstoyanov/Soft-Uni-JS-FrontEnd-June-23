function orders(item, quantity) {
  let coffe = 1.5;
  let water = 1;
  let coke = 1.4;
  let snacks = 2;
  let res = 0;
  if (item === "coffee") {
    res = quantity * coffe;
  } else if (item === "water") {
    res = quantity * water;
  } else if (item === "coke") {
    res = quantity * coke;
  } else {
    res = quantity * snacks;
  }
  console.log(res.toFixed(2));
}
