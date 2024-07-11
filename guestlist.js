//guestList arrays
var guestList = ["Ifaz", "Iraz", "Ira"];
var guestName = prompt("Who are you looking for?");
if(guestList.includes(guestName)){
    alert("The person you have been looking for is here");
}else{
    alert("Sorry, but we don't know who your talking about");
}