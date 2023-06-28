function cWords(text, word){
    let wordLength = word.length;
    let censored = "*".repeat(wordLength);
    let newText = text.replaceAll(word, censored)
    console.log(newText);
}
/* function cWord(text, word) {
    console.log(text.split(word).join('*'.repeat(word.length)));
} */
cWords('A small sentence with some words', 'small')
cWords('Find the hidden word', 'hidden')