function songs(arr) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }
  let songs = [];
  let numOfSongs = arr.shift();
  let typeOfSong = arr.pop();
  for (let i = 0; i < numOfSongs; i++) {
    let [type,name,time]= arr[i].split('_');
    let song = new Song(type,name,time);
    songs.push(song);
  }
  if(typeOfSong === 'all'){
    songs.forEach((i)=>console.log(i.name));
  }else{
    let filter = songs.filter((i)=>i.type === typeOfSong);
    filter.forEach((i)=>console.log(i.name));
  }
}
songs([
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);
