 
const list = document.getElementsByClassName("list")[0];
const userInput = document.getElementById("user-input");
const pencil = document.getElementById("pencil");
const allProducts = document.getElementById("groceries");

pencil.addEventListener("click",function(){
    allProducts.innerHTML = "";
});

userInput.addEventListener("keydown",function(event){
    if(event.key == "Enter")
    additem();
});

function additem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    allProducts.insertAdjacentElement("beforeend", h2);
    userInput.value = "";
}