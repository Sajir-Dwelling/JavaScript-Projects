function rollDice(){

    const diceNumber = document.getElementById("number").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i=0; i<diceNumber; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push('<img src="images/dice'+ value + '.png">');
    }

    diceResult.innerHTML = "dice: "+values.join( ' , ');
    diceImage.innerHTML = images.join('');
}