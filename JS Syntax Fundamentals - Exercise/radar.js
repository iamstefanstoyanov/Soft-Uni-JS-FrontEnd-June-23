function radar(speed, area) {
  let limit;
  if (area === "motorway") {
    limit = 130;
    speedCheck(speed, limit)
  } else if (area === "interstate") {
    limit = 90;
    speedCheck(speed, limit)
  } else if (area === "city") {
    limit = 50;
    speedCheck(speed, limit)
  } else {
    limit = 20;
    speedCheck(speed, limit)
  }
  
  function speedCheck(speed, limit) {
    let status;
    if (speed <= limit) {
      console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
      let diff = speed - limit;
      if (diff <= 20) {
        status = "speeding";
      } else if (diff > 20 && diff <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
  }
}
radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
