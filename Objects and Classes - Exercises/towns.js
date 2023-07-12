function towns(arr) {
  for (let city of arr) {
    let obj = {};
    let [town, latitude, longitude] = city.split(" | ");
    obj["town"] = town;
    obj["latitude"] = Number(latitude).toFixed(2);
    obj["longitude"] = Number(longitude).toFixed(2);
    console.log(obj);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
towns(["Plovdiv | 136.45 | 812.575"]);
