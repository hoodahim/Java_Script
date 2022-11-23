'use strict';

function dice_roll() {
  const roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}
let result;
do{
  result = dice_roll();
  console.log(result);
} while ( result < 6);


