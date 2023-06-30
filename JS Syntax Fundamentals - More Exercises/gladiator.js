function gladiatorExpenses(
  lostFightsConut,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let helmet = 0;
  let sword = 0;
  let shield = 0;
  let armor = 0;
  for (let i = 1; i <= lostFightsConut; i++) {
    let helmetBroken = false;
    let swordBroken = false;
    if (i % 2 == 0) {
      helmet++;
      helmetBroken = true;
    }
    if (i % 3 == 0) {
      sword++;
      swordBroken = true;
    }
    if(helmetBroken && swordBroken){
        shield++; 
        if(shield%2==0){
            armor++
        }
    }   
  }
  let res = helmet*helmetPrice + sword*swordPrice + shield*shieldPrice + armor*armorPrice;
  console.log(`Gladiator expenses: ${res.toFixed(2)} aureus`); 
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
