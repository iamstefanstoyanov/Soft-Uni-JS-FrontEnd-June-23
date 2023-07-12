function store(arr1, arr2) {
  let store = {};
  for (let i = 0; i < arr1.length; i += 2) {
    store[arr1[i]] = Number(arr1[i + 1]);
  }
  for (let i = 0; i < arr2.length; i += 2) {
    if (store.hasOwnProperty(arr2[i])) {
      store[arr2[i]] += Number(arr2[i + 1]);
    } else {
      store[arr2[i]] = Number(arr2[i + 1]);
    }
  }
  for(let prod in store) {
      console.log(`${prod} -> ${store[prod]}`);
  }
}
store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
store(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
