function validityChecker(x1, y1, x2, y2) {
  let distance = Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2));
  if (Number.isInteger(distance)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  distance = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
  if (Number.isInteger(distance)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  if (Number.isInteger(distance)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
