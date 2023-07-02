function solve(pass) {
  isValidLength = false;
  isValidLetters = false;
  isValidDigits = false;

  pass.length >= 6 && pass.length <= 10
    ? (isValidLength = true)
    : console.log("Password must be between 6 and 10 characters");
  pass.match(/^[a-zA-Z0-9]+$/g)
    ? (isValidLetters = true)
    : console.log("Password must consist only of letters and digits");
  pass.match(/[0-9]{2,}/g)
    ? (isValidDigits = true)
    : console.log("Password must have at least 2 digits");

  if (isValidLength && isValidLetters && isValidDigits) {
    console.log("Password is valid");
  }
}
solve("logIn");
solve("MyPass123");
solve("Pa$s$s");
