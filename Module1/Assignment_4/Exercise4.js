'use strict';
const name = prompt('Enter your name.');
let hogwartsClass = Math.floor(Math.random()*4)+1;
switch (hogwartsClass){
  case 1:
    document.querySelector('#gryffindor').innerHTML = name + ', you are Gryffindor.';
    break;
  case 2:
    document.querySelector('#slytherin').innerHTML = name + ', you are Slytherin.';
    break;
  case 3:
    document.querySelector('#hufflepuff').innerHTML = name + ', you are Hufflepuff.';
    break;
  case 4:
    document.querySelector('#ravenclaw').innerHTML = name + '. you are Ravenclaw.';
    break;
}
