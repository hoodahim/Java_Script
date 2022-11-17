'use strict';

const year = prompt('Enter a year.');

let leapYearCondition1, leapyearCondition2, leapYearCondition3;
leapYearCondition1 = year % 4;
leapyearCondition2 = year % 100;
leapYearCondition3 = year % 400;
if (leapYearCondition1 == 0 && leapyearCondition2 == 0 && leapYearCondition3 != 0) {
  document.querySelector('#notLeapYear').innerHTML = 'The year ' + year +
      ' is not a Leap year.'
}
else if (leapYearCondition1 == 0 || leapyearCondition2 == 0 &&
      leapYearCondition3 == 0) {
    document.querySelector('#leapYear').innerHTML = 'The year ' + year +
        ' is a Leap year.';
}
else {
  document.querySelector('#notLeapYear').innerHTML = 'The year ' + year + ' is not a Leap year.'
}
