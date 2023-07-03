function objToJSON(name, lastName, hairColor,){
    let obj = {name, lastName,hairColor};
    console.log(JSON.stringify(obj));
}
objToJSON('George', 'Jones', 'Brown')
objToJSON('Peter', 'Smith', 'Blond')