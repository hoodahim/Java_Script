'use strict';
const startyr = parseInt(prompt('Enter a starting year.'));
const endyr = parseInt(prompt('Enter ending year.'));
let i = startyr;
do {
  if (i % 4 == 0 && i % 100 == 0 &&
      i % 400 != 0) {}
  else if (i % 4 == 0 || i % 100 == 0 &&
      i % 400 == 0) {
    let leapyear = i;
    document.write(leapyear + '<br />')
    console.log(leapyear);
  }
  else {}
  i++;
}
while (i <= endyr);
