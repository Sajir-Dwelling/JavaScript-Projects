//bmi calculator
var bmicalculator
var yourWeight = prompt("What is your weight?"); // in kilograms
var yourHeight = prompt("What is your hight?"); // in meter
var BMI = yourWeight/(Math.pow(yourHeight,2));
var BMI = console.log("Your BMI is" + " "+ BMI);
function bmicalculator(weight,height) {
var BMI = weight/(Math.pow(height,2));
return Math.round(BMI);
}
var BMI = bmicalculator(58,1.778);
console.log(BMI);