function timer() {
    for(let i = 1; i<=5; i++){
        setTimeout(function() {
           //Write your code here...
          console.log(i);
        }, //write your code here...
    	i*1000);
    }
    console.log("Hello ninjas!");
}
timer();
