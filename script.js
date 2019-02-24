var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomButton = document.querySelector(".button");

var bodyStyle = getComputedStyle(body);
console.log(bodyStyle.background);

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " +
		color1.value +
		", " +
		color2.value +
		")";

	css.textContent = body.style.background + ";";
	generateRandomColor();

}


function generateRandomColor() {
	var num =  Math.floor(Math.random() * 16777216).toString(16);
	while(num.length < 6){
		num = "0" + num;
	}
	num = "#" + num;
	return num;
}

function randomColorUpdate() {
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", randomColorUpdate);
window.addEventListener("load", setGradient);

//color1.addEventListener("DOMContentLoaded", updateValue);
//color2.addEventListener("DOMContentLoaded", updateValue);

