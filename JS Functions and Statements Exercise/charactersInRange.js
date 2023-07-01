function solve(a, b) {
  let x = Math.min(a.charCodeAt(0), b.charCodeAt(0));
  let y = Math.max(a.charCodeAt(0), b.charCodeAt(0));
  let line = "";
    for (let i = x + 1; i < y; i++) {
      line += "" + String.fromCharCode(i) + " ";
    }
  console.log(line);
}
solve('a',
'd')
solve('#',
':')
solve('C',
'#')