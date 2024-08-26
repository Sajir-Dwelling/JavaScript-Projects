function submit(){
    let input = document.getElementById("user-input").value;
    input= Number(input);
    if(input>=18){
        document.getElementById("result").innerHTML = "You can enter the website";
        console.log(result);
    }
    else{
        document.getElementById("result").innerHTML = "You can not enter the website."; 
        console.log(result);
    }
}