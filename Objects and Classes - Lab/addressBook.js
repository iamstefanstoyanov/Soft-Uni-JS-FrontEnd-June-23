function addressBook(arr){
    let addressBook ={};
    for(let person of arr){
        let [name, address] = person.split(':');
        addressBook[name]=address;
    }
    let sorted = Object.entries(addressBook);
    sorted.sort((a,b)=> a[0].localeCompare(b[0]));
    for(let person of sorted) {
        console.log(`${person[0]} -> ${person[1]}`);

    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])