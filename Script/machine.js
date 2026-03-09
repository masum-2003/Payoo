console.log("Machine added");

// machine id-> Input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// machine -> Balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Cureent banlance", Number(balance))
    return Number(balance);
}

// machine --> set balance

function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}