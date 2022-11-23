'use strict';

let ok = false;
const num_list = [];
while (!ok){
  let num = parseInt(prompt('Enter a number.'));
  for ( let i = 0; i < num_list.length; i++){
    if (num_list[i] === num){
      ok = true;
    }
  }
  num_list.push(num);
}

num_list.sort((a,b) => a-b);
for ( let j = 0; j < num_list.length; j++){
  console.log(num_list[j]);
}