'use strict';
const num = prompt('Enter number of participants.');

const name_list = [];
for ( let i = 0; i < num; i++) {
  let name = prompt('Enter the names.');
  name_list.push(name);
}
name_list.sort();
document.write('<ol>')
for (let j = 0; j < name_list.length; j++) {
  document.write('<li>' + name_list[j] + '</li>');
}
document.write('</ol>')