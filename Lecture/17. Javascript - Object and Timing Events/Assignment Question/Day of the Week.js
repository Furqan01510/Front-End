// Write your code here:
var weekDay = ['','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

function returnDay(x){
  return (x < 1) || (x > 7) ? null : weekDay[x];
}

console.log(returnDay(1));
