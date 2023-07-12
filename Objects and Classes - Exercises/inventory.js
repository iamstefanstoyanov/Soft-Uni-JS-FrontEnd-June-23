function inventory(arr) {
  let heros = [];
  for (let line of arr) {
    let [hero, level, rest] = line.split(" / ");
    let items = rest.split(", ").join(", ");
    let currentHero = {
      hero,
      level,
      items,
    };
    heros.push(currentHero);
  }
  heros.sort((a, b) => a.level - b.level);
  for (let hero of heros) {
    console.log(`Hero: ${hero.hero}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
inventory([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
