function sprintReview(input) {
    let ticketLines =Number(input.shift());
    let tickets = input.slice(0,ticketLines);
    let commands = input.slice(ticketLines);
    let board = tickets.reduce((acc,curr)=>{
        let [assignee,taskId,title,status,points] = curr.split(':');

        if(!acc.hasOwnProperty(assignee)){
            acc[assignee] = [];
        }
        acc[assignee].push({taskId,title,status,points:Number(points)})
        return acc;
    },{})
    
    let commandRunner = {
        'Add New':addNewTask,
        'Change Status':changeTaskStatus,
        'Remove Task':removeTask
    }

    commands.forEach(command => {
        let [commandName,...rest] = command.split(':');
        commandRunner[commandName](...rest);

    })

    let toDoPoints = calculateTotalForStatus('ToDo')
    let inProgress = calculateTotalForStatus('In Progress')
    let reviewPoints = calculateTotalForStatus('Code Review')
    let donePoints = calculateTotalForStatus('Done')
  

    console.log(`ToDo: ${toDoPoints}pts`)
    console.log(`In Progress: ${inProgress}pts`)
    console.log(`Code Review: ${reviewPoints}pts`)
    console.log(`Done Points: ${donePoints}pts`)
    if(donePoints>=(toDoPoints+inProgress+reviewPoints)){
        console.log('Sprint was successful!')
    }else{
        console.log('Sprint was unsuccessful...')
    }
 
    function addNewTask(assignee,taskId,title,status,points){
        if(!board.hasOwnProperty(assignee)){
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }
        board[assignee].push({taskId,title,status,points:Number(points)})
    }
    function changeTaskStatus(assignee,taskId,status){
        if(!board.hasOwnProperty(assignee)){
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }
        let task = board[assignee].find(t => t.taskId === taskId);
        if(!task){
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
            return;
        }
        task.status=status;
    }
    function removeTask(assignee,index){
        if(!board.hasOwnProperty(assignee)){
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }
        if(index<0||index>=board[assignee].length){
            console.log(`Index is out of range!`);
            return
        }
        board[assignee].splice(index, 1);
    }
    function calculateTotalForStatus(status){
       return Object.values(board).reduce((acc,curr)=>{
            let boardTotal = curr
            .filter( (t)=> t.status===status)
            .reduce((total , task)=>total + task.points,0);
            return acc + boardTotal
        },0)
    }
}
sprintReview([
  "5",
  "Kiril:BOP-1209:Fix Minor Bug:ToDo:3",
  "Mariya:BOP-1210:Fix Major Bug:In Progress:3",
  "Peter:BOP-1211:POC:Code Review:5",
  "Georgi:BOP-1212:Investigation Task:Done:2",
  "Mariya:BOP-1213:New Account Page:In Progress:13",
  "Add New:Kiril:BOP-1217:Add Info Page:In Progress:5",
  "Change Status:Peter:BOP-1290:ToDo",
  "Remove Task:Mariya:1",
  "Remove Task:Joro:1",
]);
console.log('--------------')
sprintReview([
  "4",
  "Kiril:BOP-1213:Fix Typo:Done:1",
  "Peter:BOP-1214:New Products Page:In Progress:2",
  "Mariya:BOP-1215:Setup Routing:ToDo:8",
  "Georgi:BOP-1216:Add Business Card:Code Review:3",
  "Add New:Sam:BOP-1237:Testing Home Page:Done:3",
  "Change Status:Georgi:BOP-1216:Done",
  "Change Status:Will:BOP-1212:In Progress",
  "Remove Task:Georgi:3",
  "Change Status:Mariya:BOP-1215:Done",
]);
