function bitcoin(minedGold){
    let bitcoin = 0;
    let days = 0;
    let money = 0;
    let firstBought = 0;
    for (let i = 0; i < minedGold.length; i++){      
        days++;
        let gold =minedGold[i];
        if (days % 3 === 0){
            gold -= gold * 0.30;
        }
        money += gold * 67.51;
        while (money >= 11949.16){
            if (firstBought === 0){
                firstBought = days;
            }
            money -= 11949.16;
            bitcoin++;
        }
         
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin >= 1){
        console.log(`Day of the first purchased bitcoin: ${firstBought}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoin([100, 200, 300]);
bitcoin([50, 100]);
bitcoin([3124.15, 504.212, 2511.124]);
