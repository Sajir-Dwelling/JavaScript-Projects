function change_color(){
    var hex_numbers = ["0","1","2","3","4","5","6","7","8",
        "9","A","B","C","D","E","F"];

        var hexacode = "";

        for(var i=0; i<6; i++){
        var active = Math.floor(Math.random()*hex_numbers.length);
        hexacode += hex_numbers[active];
}
    document.getElementById("change_background").innerHTML = "#"+hexacode;
    document.getElementsByTagName("body")[0].style.background = "#"+hexacode;
}
function reset_web(){
    document.getElementsByTagName("body")[0].style.background = "#"+"393E46";
    document.getElementById("change_background").innerHTML = "#393E46";
}