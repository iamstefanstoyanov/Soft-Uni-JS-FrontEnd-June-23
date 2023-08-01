function thePianist(input){
    let n = input.shift();
    let pieces = input.slice(0, n)
    let commands = input.slice(n, input.length)
    let allPieces ={};
    pieces.forEach(piece=>{
        let [pieceName,composer,key] = piece.split('|');
        let curPiece = {
            composer,key
        }
        allPieces[pieceName] = curPiece
    })
    commands.forEach(command=>{
        let [action,pieceName,composer,key] = command.split('|');
        if(action === 'Add'){
            if(allPieces.hasOwnProperty(pieceName)){
                console.log(`${pieceName} is already in the collection!`)
            }else{
                let newPiece = {
                    composer,key
                }
                allPieces[pieceName] = newPiece
                console.log(`${pieceName} by ${composer} in ${key} added to the collection!`)
            }
        }else if(action === 'Remove'){
            if(!allPieces.hasOwnProperty(pieceName)){
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`)
            }else{
                delete allPieces[pieceName]
                console.log(`Successfully removed ${pieceName}!`)
            }
        }else if(action === 'ChangeKey'){
            if(!allPieces.hasOwnProperty(pieceName)){
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`)
            }else{
                allPieces[pieceName].key = composer
                console.log(`Changed the key of ${pieceName} to ${composer}!`)
            }
        }else{
            for(let el in allPieces){
                console.log(`${el} -> Composer: ${allPieces[el].composer}, Key: ${allPieces[el].key}`)
            }
            
        }
        
    })
}
thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de luna|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de luna',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'  
]
)
console.log('---------------------------------')
thePianist([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
]

)