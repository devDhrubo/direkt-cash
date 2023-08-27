//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block";
})

//deposite button event handler

const depositeBtn = document.getElementById("addDeposite");
depositeBtn.addEventListener("click", function(){
    
    const depositeNumber = getInputNumber("depositeAmount");

    updateSpanText("currentBalance", depositeNumber);
    updateSpanText("currentDeposite", depositeNumber);


    document.getElementById("depositeAmount").value="";
})

function updateSpanText(id, depositeNumber){

const current = document.getElementById(id).innerText;
const currentNumber = parseFloat(current);
const totalBalance = depositeNumber + currentNumber;
document.getElementById(id).innerText = totalBalance;

}


//withdraw event handler

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);


    document.getElementById("withdrawAmount").value="";

})

function getInputNumber(id){
    const Amount = document.getElementById(id).
    value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}