const subscribe = document.getElementById("sub");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mast");
const paypal = document.getElementById("pay");
const result = document.getElementById("result");
const payment = document.getElementById("payment");

function submit(){
    if(subscribe.checked){
        result.innerHTML = "You've subscribed to our channel";
    }
    else{
        result.innerHTML = "You haven't subscribed to our channel"
    }

    if(visa.checked){
        payment.innerHTML = "You are paying with Visa."
    }
 
    else if(mastercard.checked){
        payment.innerHTML = "You are paying with Mastercard."
    }

    else if(paypal.checked){
        payment.innerHTML = "You are paying with Paypal."
    }
    
    else{
        payment.innerHTML = "If you are not paying then you have to suck my pussy."
    }
}