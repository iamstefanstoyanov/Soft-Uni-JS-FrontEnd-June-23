function mTimes(text) {
  text = text.split(" ");
  for (let word of text) {
    if (word.startsWith("#") && word.length > 1) {
      word = word.substring(1);
      if(word.match("^[a-zA-Z]+$")){
          console.log(word);
      }
    }
  }
}
mTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
mTimes(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
