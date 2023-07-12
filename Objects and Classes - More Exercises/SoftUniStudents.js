function softUniStudents(input) {
  let listOfCourses = {};
  for (let element of input) {
    if (!element.includes(`[`)) {
      let [courseName, capacity] = element.split(`: `);
      if (!listOfCourses.hasOwnProperty(courseName)) {
        listOfCourses[courseName] = {
          capacity: Number(capacity),
          students: [],
        };
      } else {
        listOfCourses[courseName].capacity += Number(capacity);
      }
    } else if (element.includes(`with email`)) {
      element = element.split(`[`);
      let userName = element.shift();
      element = element[0].split(`]`);
      let creditCount = Number(element.shift());
      let temp = element[0].split(` `);
      let email = temp[3];
      let courseName = element[0].split(` joins `)[1];
      if (
        listOfCourses.hasOwnProperty(courseName) &&
        listOfCourses[courseName].capacity > 0
      ) {
        listOfCourses[courseName].students.push({
          userName: userName,
          creditCount: creditCount,
          email: email,
        });
        listOfCourses[courseName].capacity--;
      }
    }
  }
  let sortedByCapacity = Object.entries(listOfCourses).sort(
    (a, b) =>
      Object.keys(b[1].students).length - Object.keys(a[1].students).length
  );
  for (let element of sortedByCapacity) {
    console.log(`${element[0]}: ${element[1].capacity} places left`);
    element[1].students
      .sort((a, b) => b.creditCount - a.creditCount)
      .forEach((x) =>
        console.log(`--- ${x.creditCount}: ${x.userName}, ${x.email}`)
      );
  }
}
softUniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);
softUniStudents([
  "JavaBasics: 15",
  "user1[26] with email user1@user.com joins JavaBasics",
  "user2[36] with email user11@user.com joins JavaBasics",
  "JavaBasics: 5",
  "C#Advanced: 5",
  "user1[26] with email user1@user.com joins C#Advanced",
  "user2[36] with email user11@user.com joins C#Advanced",
  "user3[6] with email user3@user.com joins C#Advanced",
  "C#Advanced: 1",
  "JSCore: 8",
  "user23[62] with email user23@user.com joins JSCore",
]);
