// Write your code here:
var weight = 58;
var height = 1.60;

var bmi = weight / (height*height);

if(bmi > 0 && bmi < 18.5){
    console.log("Your body Mass Index is "+ bmi +"and you are Underweight");
}else if(bmi > 18.6 && bmi < 24.9 ){
    console.log("Your body Mass Index is "+ bmi +"and you are Healthy	");
}else if(bmi > 25 && bmi < 25.9){
    console.log("Your body Mass Index is "+ bmi +"and you are Overweight");
}else if(bmi > 30){
    console.log("Your body Mass Index is "+ bmi +"and you are Obese");
}else{
    console.log("Invalied Input");
}
