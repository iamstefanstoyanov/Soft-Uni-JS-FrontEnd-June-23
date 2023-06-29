function cookingNums(...params){
    let arr = [...params];
    let num = Number(arr.shift());
    for(let p of arr){
        if(p==='chop'){
            num /= 2
        }else if(p==='dice'){
            num = Math. sqrt(num)
        }else if(p==='spice'){
            num ++;
        }else if(p==='bake'){
            num*=3
        }else{
            num -= num*0.2
        }
        console.log(num)
    }
}
cookingNums('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet')