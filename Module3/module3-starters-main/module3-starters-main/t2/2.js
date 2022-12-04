'use strict';

const list = document.querySelector('#target');
var first = document.createTextNode('First item');
var second = document.createTextNode('Second item');
var third = document.createTextNode('Third item');
const li1 = document.createElement('li');
li1.appendChild(first);
const li2 = document.createElement('li');
li2.appendChild(second);
const li3 = document.createElement('li');
li3.appendChild(third);

list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);

document.getElementsByTagName('li')[1].classList.add('my-item');
