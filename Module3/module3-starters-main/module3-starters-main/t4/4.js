'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const student = document.getElementById('target');

for ( let i = 0; i<students.length; i++){
  let item = document.createElement('option');
  student.appendChild(item);
  document.getElementsByTagName('option')[i].value = students[i].id;
  document.getElementsByTagName('option')[i].innerText = students[i].name;
}
