function solve(input){
    let n = input.shift();
    let riders = input.splice(0, n);
    let ridersInfo = {};
    riders.forEach( r => { 
        let [name,fuel,position] = r.split('|');
        ridersInfo[name] = {
            fuel:Number(fuel),
            position:Number(position)
        }
    });
    while(input[0]!== 'Finish'){
        let [action,rider,minFuel,newPosition] = input[0].split(' - ');

        switch(action){
            case 'StopForFuel':
            if(ridersInfo[rider].fuel<Number(minFuel)){
                let currentPosition = ridersInfo[rider].position;
                ridersInfo[rider].position = Number(newPosition)
                let newArr = Object.entries(ridersInfo)
                let riderOnThatPosition = newArr.filter(x=>{
                    if(x[1].position === Number(newPosition)){
                        return x[0]
                    }
                })
                console.log(`${rider} stopped to refuel but lost his position, now he is ${Number(newPosition)}.`)
            }else{
                console.log(`${rider} does not need to stop for fuel!`)
            }
            break;
            case 'Overtaking':
                let rider1pos = ridersInfo[rider].position
                let rider2pos = ridersInfo[minFuel].position
                if(rider1pos<rider2pos){
                    ridersInfo[rider].position=rider2pos
                    ridersInfo[minFuel].position=rider1pos
                    console.log(`${rider} overtook ${minFuel}!`)
                }
            break;
            case 'EngineFail':
                delete ridersInfo[rider]
                console.log(`${rider} is out of the race because of a technical issue, ${minFuel} laps before the finish.`)
            break;
        }
        input.shift();
    }
    for(let rider in ridersInfo) {
        console.log(`${rider}`)
        console.log(`  Final position: ${ridersInfo[rider].position}`)
    }
}
solve((["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
)
console.log('------------')
solve((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])

)