function login(str) {
  let username = str.shift();
  let count = 0;
  let pass = username.split("").reverse().join("");
  for (let word of str) {
    count++;
    if (word === pass) {
      console.log(`User ${username} logged in.`);
      return;
    } else {
      if (count == 4) {
        console.log(`User ${username} blocked!`);
        return;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}
login(["Acer", "login", "go", "aaaa", "recA"]);
