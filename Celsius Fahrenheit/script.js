
const input = document.getElementById("textbox");
const Fahrenheit = document.getElementById("toFahrenheit");
const Celsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function conversion(){

    if(Fahrenheit.checked){
        temp = Number(textbox.value);
        temp = (((input.value)*9/5)+32); 
        result.innerHTML = "Temperature in Fahrenheit is"+" "+temp+"°F";
    }
    else if(Celsius.checked){
        temp = Number(textbox.value);
        temp = ((input.value-32)*(5/9));
        result.innerHTML = "Temperature in Celsius is"+" "+temp+"°C";
    }
    else{
        result.innerHTML = "Select a unit";
    }
}