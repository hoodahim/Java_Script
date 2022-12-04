'use strict';
const names = ['John', 'Paul', 'Jones'];


const name = document.getElementById('target');

for ( let i = 0; i<names.length; i++){
  let item = document.createElement('li');
  name.appendChild(item);
  document.getElementsByTagName('li')[i].innerText = names[i];
}