'use strict';
const num_list = [];
let num;
do{
  num = parseInt(prompt('Enter a number.'));
  num_list.push(num);
}
while( num != 0);
num_list.sort((a,b) => b-a);
for ( let i = 0 ; i < num_list.length; i++) {
  console.log(num_list[i]);
}
