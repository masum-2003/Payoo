console.log("Login functioalitity comming");

document.getElementById("login-btn").addEventListener("click", function(){
    // get the movile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    // get the pin
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);
    // match pin and mobile number
    if(contactNumber == "01234567890" && pin == "1234"){
        // true:::>> alert> homepage
        alert("login Success")
        // window.location.replace("/home.html")
        window.location.assign("/home.html")
    }
    else{
        // true:::>> alert> return
        alert("Login Failed");
        return;
    }
    
})