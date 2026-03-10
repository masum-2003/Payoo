

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

// machine id >> hide all > show id
function showOnly(id){
    
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const history = document.getElementById("history");
    // console.log(`add Money- ${addmoney}, Cashout- ${cashout}`);
    // shobaike hide kore dao
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");

    // id eala element ta ke tumi show koro
    const selected =document.getElementById(id);
    selected.classList.remove("hidden");
}