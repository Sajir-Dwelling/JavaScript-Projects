//lovePercentage
var name1 = prompt("What is your name?");
var name2 = prompt("Who do you want to check with?");
var lovePercentage = Math.random();
lovePercentage = lovePercentage*100;
var lovePercentage = Math.floor(lovePercentage) + 1;
if(lovePercentage>70){
    alert("Your love percentage is" + " "+ lovePercentage + "%." +" You have a chance, try to do your best but don't mess it up. You probably can get your loved one.");
}
else {
    alert("Your love percentage is" + " "+ lovePercentage + "%." +" Dont bother, focus on your life.");
}