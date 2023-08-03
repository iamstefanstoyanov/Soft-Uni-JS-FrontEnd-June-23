function shopingList(input){
    let initial = input.shift().split('!');
    let last = input.pop();
    for(let i = 0; i<input.length; i++){
        let [command, itemOne,itemTwo] = input[i].split(' ');
        if(command=='Urgent'){
            if(initial.includes(itemOne)){
                continue
            }
            initial.unshift(itemOne);
        }else if(command=='Unnecessary'){
            if(initial.includes(itemOne)){
                let index = initial.indexOf(itemOne);
                initial.splice(index, 1);
            }
        }else if(command=='Correct'){
            if(initial.includes(itemOne)){
                let index = initial.indexOf(itemOne);
                initial[index] = itemTwo;
            }
        }else{
            if(initial.includes(itemOne)){
                let index = initial.indexOf(itemOne);
                let currentItem = initial[index];
                initial.splice(index, 1);
                initial.push(currentItem);
            }
        } 
    }
    console.log(initial.join(', '));
    
}
shopingList((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
)
shopingList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
)