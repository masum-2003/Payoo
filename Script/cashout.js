document.getElementById("cashout-btn").addEventListener("click", function(){
    // 1-- get the agent number and validate
    const cashoutNumber = getValueFromInput("cashout-number");
     if(cashoutNumber.length != 11){
        alert("Invalid agent number");
        return;
    }

    // 2- get the amount

    const cashoutAmount = getValueFromInput("cashout-amount");

    // 3- get the current balance
    // const balanceElement = document.getElementById("balance");
    // const balance = balanceElement.innerText;
    // console.log(balance);

    const currentBalance = getBalance();

    // 4- calculate banglance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert("Invaliud Amount");
        return;
    }
    const pin = getValueFromInput("cashout-pin");
    if(pin === "1234"){
        // 5-1-- true:: show an alert > set Balance
        alert("casout successful");
        setBalance(newBalance);

        // 1- history-container ke shore niya ashbp
        const history = document.getElementById("history-container");
        // 2-- new div create korbo
        const newHistory = document.createElement("div");
        // 3-- new div innerHTML add korbo
        newHistory.innerHTML = `
        <div class="" id="transection-card p-5 bg-base-100">
             Cashout ${cashoutAmount} TAKA Success to  ${cashoutNumber}, at ${new Date()}  
        </div>
        `
        // 4-- history container a newDiv append korbo
        history.append(newHistory);
    //    document.getElementById("balance").innerText = newBalance;
    }
        else{
            alert("Invalid pin");
            return;
        }
});

// document.getElementById("cashout-btn").addEventListener("click", function(){
//     // 1-- get the agent number and validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     // console.log(cashoutNumber);
//     // if(cashoutNumber.length != 11){
//     //     alert("Invalid agent number");
//     //     return;
//     // }

//     // 2-- get the amount, validate, convert to Number
//     const casoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = casoutAmountInput.value;
//     console.log(cashoutAmount);


//     // // get the current Balance, validate, convert to Number
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     // // 4-- Calculate new Balance
//     const n+
// ewBalance = Number(balance) - Number(cashoutAmount);
    

//     if(newBalance < 0){
//         alert("Invaliud Amount");
//         return;
//     }
    
//     // 5-- Get the Pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if(pin === "1234"){
//         // 5-1-- true:: show an alert > set Balance
//         alert("casout successful");
//         console.log("new balance", newBalance);
//         balanceElement.innerText = newBalance;
//     }
//     else{
//         // 5-1-- flase:: show error alert > return
//         alert("Invalid pin");
//         return;
//     }
    
    
// })