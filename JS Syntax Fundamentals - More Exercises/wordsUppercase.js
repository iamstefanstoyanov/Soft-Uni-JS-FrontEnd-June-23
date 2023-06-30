function wordsUpperCase(text) {
    return text.match(/\w+/g).join(", ").toLocaleUpperCase()
}
wordsUpperCase('Hi, how are you?')
wordsUpperCase('hello')