
var userInput = document.getElementById("number")

var action = "";

function press(num){
    action += num;
    userInput.value = action;
}

function equal(){
    userInput.value = eval(action);
    action = "";
}

function erase_number(){
    action = "";
    userInput.value = action;
}

