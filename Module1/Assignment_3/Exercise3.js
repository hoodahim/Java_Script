'use strict';
const num1 = parseFloat(prompt('Enter integer 1.'));
const num2 = parseFloat(prompt('Enter integer 2.'));
const num3 = parseFloat(prompt('Enter integer 3.'));

let sum, product, average;

sum = num1 + num2 + num3;
product = num1 * num2 * num3;
average = sum/3;

document.querySelector('#sum').innerHTML = 'Sum equals= ' + sum;
document.querySelector('#product').innerHTML = 'Product equals= ' + product;
document.querySelector('#average').innerHTML = 'Average equals= ' + average;