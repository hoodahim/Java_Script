'use strict';
const num_list = [];
for (let i = 0; i < 5; i++) {
  let num = prompt('Enter a number.');
  num_list.push(num);
}
console.log(num_list);
 const num_list_reverse = [];
for (let j = 1; j <= num_list.length; j++) {
  num_list_reverse.push(num_list[num_list.length - j]);
}
console.log(num_list_reverse);