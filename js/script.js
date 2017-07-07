var display = document.getElementById('display');

function toDisplay(k){
	if(display.value==="0" && k !=="c"){
		display.value = k;
	} else if(k==="c"){
		display.value = "0";
	}
	else if(display.value.length<15){
		display.value += k;
	}
}

function result(){
	// Store the vale of the display as string.
	x=display.value;
	// Evaluate the string as math.
	// The eval() function evaluates JavaScript code represented as a string.
	y=eval(x);
	checkDigits(y);
}

function percent(){
	// Same than before.
	x=display.value;
	// Square root would be: y=eval(Math.sqrt(x));
	y=eval(x/100);
	checkDigits(y);
}

function clearEntry(){
	var current = display.value;
	var len = current.length-1;
	var newValue = current.substring(0, len);
	display.value = newValue;
}

function checkDigits(){
	lengthY = y.toString().length;
	if(lengthY>14){
		y=y.toExponential(2);
		lengthY = y.toString().length;
	}
	// Exponential solution avoids the following code:
	// if(lengthY<15 && display.value!=="Digit Limit Met"){
	// 	// Overwrite the display to that value.
	// 	display.value=y;
	// } else {
	// 	display.value="Digit Limit Met";
	// }
	display.value=y;
	console.log(y);
}