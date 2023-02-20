// Propagation of Event
//event.stopPropagation();

var outerDiv = document.getElementById('outer');
var clickCount = document.getElementById('click-count');

var count = 0;

outerDiv.addEventListener('click',function(event){
    'use strict';
    count++;
    console.log(count);
    clickCount.innerText = count + " ";
});

