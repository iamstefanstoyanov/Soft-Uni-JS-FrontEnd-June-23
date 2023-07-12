function oddOccurrences(str){
    let words = str.split(' ');
    let res = {};
    for(let word of words){
        word = word.toLocaleLowerCase();
        if(res.hasOwnProperty(word)){
            res[word]++;
        }else{
            res[word] = 1;
        }
    }
    let filtered = Object.entries(res).filter(([word,count]) => {
        if(count%2==1){
            return true;
        }else{
            return false;
        }
    })
    console.log(filtered.map(entry => entry[0]).join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')