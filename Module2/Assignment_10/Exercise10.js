'use strict';


const cand_num = parseInt(prompt('Enter number of candidates.'));
const cand_list = [];
let name_cand;
for (let i=0; i<cand_num; i++){
  name_cand = prompt('Name for candidate ');
  cand_list[i] = {
    name: name_cand,
    votes: 0
  }
}
//console.log(cand_list);

const voter_num = parseInt(prompt('Enter number of voters.'));
for (let j = 0 ; j < voter_num; j++) {
  let vote = prompt('Enter the name of the candidate.');
  //console.log(vote);
  for (let k = 0; k < cand_list.length; k++){
    if (vote === cand_list[k].name){
      cand_list[k].votes = cand_list[k].votes + 1;
    }
  }
}

cand_list.sort((a,b) => {
  return b.votes - a.votes;
});

//console.log(cand_list);

console.log('The winner is ' + cand_list[0].name + ' with ' + cand_list[0].votes + ' votes.');
console.log('results:');
for (let i = 0; i < cand_list.length; i++){
  console.log(cand_list[i].name + ' : ' + cand_list[i].votes + ' votes');
}
