function perfectN(n) {
  let isPerfect = true;
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  if (n !== sum) {
    isPerfect = false;
  }
  console.log(isPerfect ? `We have a perfect number!` : `It's not so perfect.`);
}
