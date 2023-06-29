function strSubstr(word,text){
    text = text.split(' ');
    for(let w of text){
        if(w.toLowerCase() === word.toLowerCase()){
            console.log(`${word}`)
            return;
        }
    }
    console.log(`${word} not found!`)
}
strSubstr('javascript', 'JavaScript is the best programming language')
strSubstr('python', 'JavaScript is the best programming language')