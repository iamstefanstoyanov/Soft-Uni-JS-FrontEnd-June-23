function solve(n) {
  let nToString = String(n).split('');
  let odd = 0;
  let even = 0;
  for (let i = 0; i < nToString.length; i++) {
    if(Number(nToString[i])%2===0){
        even+=Number(nToString[i]);
    }else{
        odd+=Number(nToString[i]);
    }
  }
  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
solve(1000435);
solve(3495892137259234);
