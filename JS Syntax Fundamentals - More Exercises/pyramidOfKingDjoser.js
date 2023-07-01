function djoser(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let height = 0;
  while (base > 2) {
    let currentMarbel = base * 4 - 4;
    let currentStone = base * base - currentMarbel;
    stone += currentStone;

    height++;
    if (height % 5 === 0) {
      lapis += currentMarbel;
    } else {
      marble += currentMarbel;
    }
    base -= 2;
  }
  height++;
  gold += base * base;

  console.log(`Stone required: ${Math.ceil(stone * increment)}`);
  console.log(`Marble required: ${Math.ceil(marble * increment)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
  console.log(`Gold required: ${Math.ceil(gold * increment)}`);
  console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}
djoser(11, 1);
djoser(11, 0.75);
djoser(12, 1);
djoser(23, 0.5);
