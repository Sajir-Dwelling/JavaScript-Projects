var diceNumber = Math.floor(Math.random()*6)+1; //setting the number from 1-6

var diceImage = "dice"+diceNumber+".png"; //random png image according to the random diceNumber 

var image1  = document.querySelectorAll("img")[0].setAttribute("src",diceImage); //replacing the src with diceImage

var diceNumber2 = Math.floor(Math.random()*6)+1; //same ase diceNumber

var diceImage2 = "dice"+diceNumber2+".png"; //random image according to diceNumber2

var image2 = document.querySelectorAll("img")[1].setAttribute("src",diceImage2); //same concept as image1

if(diceNumber>diceNumber2){
    document.querySelector("h1").innerHTML = "😸Player 1 Wins!"; 
}
else if(diceNumber<diceNumber2){
    document.querySelector("h1").innerHTML = "🤗Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "🤝Draw!";
}

