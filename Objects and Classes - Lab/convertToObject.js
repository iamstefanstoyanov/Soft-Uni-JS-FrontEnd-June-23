function convert(srt) {
  let obj = Object.entries(JSON.parse(srt))
  for(let [key,val] of obj) {
      console.log(`${key}: ${val}`);
  }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')