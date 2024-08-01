

var messageInput = document.getElementById("messag-input")

function send_message(){
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = "";
}