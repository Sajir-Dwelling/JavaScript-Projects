    
    
var start = 0

function change_Number(num){
    start+=num;
    document.getElementById("count").innerHTML = start;
}

function reset_number(){
    start = 0;
    document.getElementById("count").innerHTML = start;
}

