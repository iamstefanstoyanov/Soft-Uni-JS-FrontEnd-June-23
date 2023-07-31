function horseRacing(input) {
    let horses = input.shift().split("|");
    let x = 0;
    while (input[x] !== "Finish") {
      let lineOfInput = input[x].split(" ");
      let command = lineOfInput[0];
  
      switch (command) {
        case "Retake":
          let overtakingHorse = lineOfInput[1];
          let overtakenHorse = lineOfInput[2];
          let indexOfOvertakingHorse = horses.indexOf(overtakingHorse);
          let indexOfOvertakenHorse = horses.indexOf(overtakenHorse);
          if (indexOfOvertakingHorse < indexOfOvertakenHorse) {
            horses[indexOfOvertakingHorse] = overtakenHorse;
            horses[indexOfOvertakenHorse] = overtakingHorse;
  
            console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
          }
          break;
        case "Trouble":
          let horse = lineOfInput[1];
          let horseIndex = horses.indexOf(horse);
  
          if (horseIndex > 0) {
            let previousHorseIndex = horseIndex - 1;
            let previousHorseName = horses[previousHorseIndex];
            horses[previousHorseIndex] = horse;
            horses[horseIndex] = previousHorseName;
  
            console.log(`Trouble for ${horse} - drops one position.`);
          }
  
          break;
        case "Rage":
          let horseName = lineOfInput[1];
  
          let currentHorseIndex = horses.indexOf(horseName);
          if (currentHorseIndex === horses.length - 2) {
            horses.splice(currentHorseIndex, 1);
            horses.push(horseName);
          } else if (currentHorseIndex !== horses.length - 1) {
            horses.splice(currentHorseIndex + 2 + 1, 0, horseName);
            horses.splice(currentHorseIndex, 1);
          }
          console.log(`${horseName} rages 2 positions ahead.`);
          break;
        case "Miracle":
          let lastHorse = horses.shift();
          horses.push(lastHorse);
          console.log(`What a miracle - ${lastHorse} becomes first.`);
          break;
      }
      x++;
    }
    
    console.log(horses.join("->"));
    console.log(`The winner is: ${horses.pop()}`);
  }
horseRacing(['Bella|Alexia|Sugar',
'Retake Alexia Sugar',
'Rage Bella',
'Trouble Bella',
'Finish'])
console.log('-----------')
horseRacing(['Onyx|Domino|Sugar|Fiona',
'Trouble Onyx',
'Retake Onyx Sugar',
'Rage Domino',
'Miracle',
'Finish'])
console.log('-----------')
horseRacing(['Fancy|Lilly', 'Retake Lilly Fancy', 'Trouble Lilly', 'Trouble Lilly', 'Finish', 'Rage Lilly'])