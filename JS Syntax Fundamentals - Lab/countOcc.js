function count(text, word) {
  let count = 0;
  let words = text.split(" ");
  for (let w of words) {
    if(w == word){
        count++
    }
  }
  console.log(count);
}
count("This is a word and it also is a sentence", "is");
count(
  "softuni is great place for learning new programming languages",
  "softuni"
);
