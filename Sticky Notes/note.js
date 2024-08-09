
var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var crossIcon = document.getElementById("cross-icon");
var i = 0;

checkIcon.addEventListener("click",function(){
    create_Note();
})

crossIcon.addEventListener("click",function(){
    click_Note();
})

function click_Note(){
    if(container3.style.display=="none"){
        container3.style.display = "block";
    }
    else{
        container3.style.display = "none";
        }
    }

function create_Note(){
    var noteText = document.getElementById("note-text");
    var nodeParent = document.createElement("div");
    var nodeChild = document.createElement("h1");
    
    nodeChild.innerHTML = noteText.value;

    nodeChild.setAttribute("style", "width:250px; height:250px; padding:25px; margin-top:10px; font-size:24px;overflow:hidden ; box-shadow : 0px 10px 24px 0px rgb(0, 0, 0 ,0.75);");
    nodeChild.style.margin = margin();
    nodeChild.style.background = color();
    nodeChild.style.transform = rotate();
    

    nodeParent.appendChild(nodeChild);

    container2.insertAdjacentElement("beforeend",nodeParent);

}
 
function margin(){
    var random_margin = ["-5px", "1px", "5px", "10px", "7px"];
    return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function color(){
    var random_color = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
    if(i>random_color.length - 1){
        i=0;
    }
    return random_color[i++];
}

function rotate(){
    var random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];
    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}
