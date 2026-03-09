document.getElementById("cashout-btn").addEventListener("click", function(){
    // 1-- get the agent number and validate
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    // console.log(cashoutNumber);
    // if(cashoutNumber.length != 11){
    //     alert("Invalid agent number");
    //     return;
    // }

    // 2-- get the amount, validate, convert to Number
    const casoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = casoutAmountInput.value;
    console.log(cashoutAmount);


    // // get the current Balance, validate, convert to Number
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    // // 4-- Calculate new Balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    

    if(newBalance < 0){
        alert("Invaliud Amount");
        return;
    }
    
    // 5-- Get the Pin and verify
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    if(pin === "1234"){
        // 5-1-- true:: show an alert > set Balance
        alert("casout successful");
        console.log("new balance", newBalance);
        balanceElement.innerText = newBalance;
    }
    else{
        // 5-1-- flase:: show error alert > return
        alert("Invalid pin");
        return;
    }
    
    
})