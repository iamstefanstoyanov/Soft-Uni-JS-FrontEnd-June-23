function search() {
   let searchText = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let list = document.querySelectorAll('ul#towns li');
   let matches = 0;
   for(let word of list) {
      word.style.fontWeight = 'normal';
      word.style.textDecoration = '';
   }
   for(let word of list) {
      let text = word.textContent;
      if(text.match(searchText)){
         matches++;
         word.style.fontWeight = 'bold';
         word.style.textDecoration = 'underline';
      }
   }
   result.textContent = `${matches} matches found`;
   document.getElementById('searchText').value = '';
}
