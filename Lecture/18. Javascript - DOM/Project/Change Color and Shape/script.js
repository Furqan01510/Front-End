// Shape Area Variable to Change BackgroundColor
const bgColor = document.querySelector('.shape-area');
const shapeDiv = document.querySelector('.shape');

// Buttons 
const changeColor = document.getElementById('change-Color');
const changeShape = document.getElementById('change-Shape');


bgColor.style.backgroundColor = 'grey';
// Assigning Grey Color to Div 


// Defination colors variable to change
const colors = ['red','green','blue'];
let i = 0;
//Change Color is id
changeColor.addEventListener('click', function ChangeColorFun(){

	// If Check the condition that i equal to colors.length
	if(i<=colors.length){
		bgColor.style.backgroundColor = colors[i];
		i++;
	}else{
		i=0;
	}
});


// Changing Shapes

let j = 1; 

changeShape.addEventListener('click', function ChangeShapeFun(){

	if(j===1){
		shapeDiv.style.borderRadius = '0';
		j = 2;
	}else if(j===2){
		shapeDiv.style.borderRadius = '50%';
		j = 3;
	}else{
		shapeDiv.style.borderRadius = '20% / 50%';
		j = 1;
	}
	
});



