'use strict';
const no_of_dice = parseInt(prompt('Enter number of dice to roll.'));
let total = 0;
for ( let i = 1; i <= no_of_dice; i++) {
  let roll = Math.floor(Math.random()*6)+1;
  total = total + roll;
}
document.querySelector('#rollTotal').innerHTML = 'Sum of dice roll is ' + total;