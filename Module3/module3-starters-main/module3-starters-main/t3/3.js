'use strict';
const names = ['John', 'Paul', 'Jones'];

console.log(names.length);
console.log(names[1]);

const name = document.getElementById('target');

for ( let i = 0; i<names.length; i++){
  let item = document.createElement('li');
  name.appendChild(item);
  document.getElementsByTagName('li')[i].innerText = names[i];
}