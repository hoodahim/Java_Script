'use strict';
const dog_list = [];
for ( let i = 0; i < 6; i++) {
  let name = prompt('Enter dog name.');
  dog_list.push(name);
}
dog_list.reverse();
document.write('<ul>');
for ( let j = 0 ; j < dog_list.length; j++) {
  document.write('<li>' + dog_list[j] + '</li>');
}
document.write('</ul>');