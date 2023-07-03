function phoneBook(arr){
    let phoneBook = {};
    for ( let el of arr){
        let [name, tel] = el.split(' ');
        phoneBook[name] = tel;
    }
    for(let phone in phoneBook){
        console.log(`${phone} -> ${phoneBook[phone]}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])