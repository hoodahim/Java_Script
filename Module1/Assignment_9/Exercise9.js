'use strict';

const number = parseInt(prompt('Enter a number.'));
let counter = 0;
for (let i = 1; i <= number; i++){
  if (number % i == 0){
    counter = counter + 1;
  }
}
if (counter > 2){
  document.querySelector('#notprime').innerHTML = 'The number is not prime.'
}
else {
  document.querySelector('#prime').innerHTML = 'The number is prime.'
}
console.log(counter);