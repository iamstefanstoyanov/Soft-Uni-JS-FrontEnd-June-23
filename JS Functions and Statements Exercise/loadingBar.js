function bar(n){
    let bar = n/10;
    let left = 10-bar;
    if(bar === 10){
        console.log('100% Complete!')
        console.log('[%%%%%%%%%%]')
    }else{
        console.log(`${n}% [${('%').repeat(bar)}${('.').repeat(left)}]`)
        console.log('Still loading...')
    }
    
}
bar(30)
bar(70)
bar(100)