'use strict';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');


const start = document.getElementById('start');
start.addEventListener('mouseup', function(evt) {
  const selection = document.getElementById('operation').value;
  const int1 = parseFloat(num1.value);
  const int2 = parseFloat(num2.value);
  switch (selection){
  case 'add':
    const addition = int1 + int2;
    document.getElementById('result').innerHTML = addition;
    break;
  case 'sub':
    const subtraction = int1 - int2;
    document.getElementById('result').innerHTML = subtraction;
    break;
  case 'multi':
    const multiply = int1 * int2;
    document.getElementById('result').innerHTML = multiply;
    break;
  case 'div':
    const division = int1 / int2;
    document.getElementById('result').innerHTML = division;
    break;
}
})

