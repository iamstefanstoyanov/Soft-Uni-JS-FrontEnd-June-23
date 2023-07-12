function words(arr){
    let words = arr.shift().split(' ');
    let listOfRes = [];
    for(let word of words){
        let count = 0;
        for(let secWord of arr){
            if(word === secWord){
                count++;
            }
        }
        let currentWord = {
            word,
            count
        }
        listOfRes.push(currentWord);
    }
    listOfRes.sort((a,b)=> b.count - a.count);
    for (let word of listOfRes) {
        console.log(`${word.word} - ${word.count}`);
      }
}
words([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])
words([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])