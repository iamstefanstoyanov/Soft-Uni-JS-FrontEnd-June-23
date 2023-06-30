function spice(yield){
    let extracted = 0;
    let count = 0;
    while(yield>=100){
        extracted+=yield;
        extracted-=26;
        yield-=10;
        count++
    }
    extracted-=26;
    if(extracted<26){
        extracted=0
    }
    console.log(count)
    console.log(extracted);
}
spice(111)
spice(450)