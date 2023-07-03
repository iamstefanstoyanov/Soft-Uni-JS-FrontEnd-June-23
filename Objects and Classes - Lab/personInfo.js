function person(fname, lname, age) {
  let obj = {};
  obj.firstName = fname;
  obj.lastName = lname;
  obj.age = age;
  return obj;
}
console.log(person('stefan', 'stasi', 23))