'use strict';
const response = confirm('Should I calculate the square root?')

switch (response){
  case false:
    document.querySelector('#negresponse').innerHTML = 'The square root is not calculated';
    break;
  case true:
    const number = prompt('Enter the number.');
    if (number > 0){
      let sqreRoot = Math.sqrt(number);
      document.querySelector('#sqrRoot').innerHTML = 'The square root of ' + number + ' is ' + sqreRoot ;
    }
    else {
      document.querySelector('#negSqrRoot').innerHTML = 'The square root of a negative number is not defined';
    }
}