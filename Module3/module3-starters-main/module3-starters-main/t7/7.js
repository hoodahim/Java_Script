'use strict';

const trigger = document.getElementById('trigger');

trigger.addEventListener('mouseover', function hover(evt){
  const i = document.getElementById('target');
  i.src = 'img/picB.jpg';
  trigger.removeEventListener('mouseover', hover);
  trigger.addEventListener('mouseleave', function(evt){
    const k = document.getElementById('target');
    k.src = 'img/picA.jpg';
  })
})
