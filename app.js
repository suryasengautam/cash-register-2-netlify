const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000,500,100,20,5,1]
const noOfNotes = document.querySelectorAll(".no-of-notes");
checkButton.addEventListener("click",function validateBillAndCashAmount( ) {
    hideMessage();
    // message.getElementsByClassName.display = "none"
    if (Number(billAmount.value )> 0) {
        if ((Number(cashGiven.value ))>  (Number(billAmount.value))) {
            const amountToBeReturned = Number(cashGiven.value) - (Number(billAmount.value))
            console.log("amountToBeReturned =",amountToBeReturned)
            calculateChange(amountToBeReturned);
            console.log("amountToBeReturned=",amountToBeReturned)
        }
        else if ((Number(cashGiven.value )) ===  (Number(billAmount.value))) {
            showMessage("Thank you for coming.Your given amount is equal to bill amount.");

        }       
        else  {
            console.log(cashGiven.value>billAmount.value,"cashGiven=",cashGiven.value,"billAmount=",billAmount.value)
            showMessage("Do you wanna wash plates?");

        }
    } else {
        showMessage("invalid bill amount");
    }
});
// function calculateChange()
function showMessage(msg){
    message.style.display = "block"
    message.style.color = "red"
    message.innerText = msg;
}
function hideMessage(){
    message.style.display = "none"
}

function calculateChange(amount) {
    const noOfNotes = document.querySelectorAll(".no-of-notes");
    console.log(amount);
    for (let i =0 ; i<availableNotes.length;i++){
        var numberOfNotes = Math.trunc(amount/availableNotes[i])
       
        amount %= availableNotes[i];
        noOfNotes[i].innerHTML = String(numberOfNotes);
        
    }

}

