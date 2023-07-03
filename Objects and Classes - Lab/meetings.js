function meetings(week){
    let appointments ={};
    for(let meeting of week){
        let [day,name] = meeting.split(' ');
        if(appointments.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        }else{
            appointments[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }
    for(let app in appointments){
        console.log(`${app} -> ${appointments[app]}`)
    }
}
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])