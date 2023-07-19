function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let res = '';
  let str = text.split(/(\s+)/).filter(x => x != ' ');
  if (namingConvention == 'Camel Case') {
      for (let i = 0; i < str.length; i++) {
          str[i] = str[i].toLowerCase();
          if (i != 0) {
              str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
          }
      }
  } else if (namingConvention == 'Pascal Case') {
      for (let i = 0; i < str.length; i++) {
          str[i] = str[i].toLowerCase();
          str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
      }
  } else {
      return document.getElementById('result').textContent = 'Error!'
  }
  res = str.join('');
  document.getElementById('result').textContent = res
}