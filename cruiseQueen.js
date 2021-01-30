
// organized my working code 

function classEventHandler(ticket, isIncrease){
    const ticketInputCount = document.getElementById(ticket + "-count");
    const newTicketInputCount = parseFloat(ticketInputCount.value);
    let ticketCount = newTicketInputCount;
    if(isIncrease == true){
        ticketCount = newTicketInputCount +1;
    }
    if(isIncrease == false && newTicketInputCount > 0){
        ticketCount = newTicketInputCount -1;
    }
    ticketInputCount.value = ticketCount;
    calculateValue();
}

function calculateValue(){
    const fClassCount = getInputValue("fClass");
    const eClassCount = getInputValue("eClass");
    const fCount = fClassCount*150 + eClassCount*100;
    document.getElementById("sub-total").innerText = fCount;
    const tax = fCount * 0.1;
    document.getElementById("tax-total").innerText = tax;
    const grandTotal = tax + fCount;
    document.getElementById("grand-total").innerText = grandTotal;
}

function getInputValue(ticket){
    const ticketInput = document.getElementById(ticket + "-count");
    const newTicketInput = parseFloat(ticketInput.value);
    return newTicketInput;
}
function whenEnterBtn(){
    const bookingForm = document.getElementById("main-form");
    bookingForm.style.display = "none";
    const confirmPayment = document.getElementById("payment-form");
    confirmPayment.style.display = "block";
}

// my working code
// document.getElementById("plus-btn").addEventListener("click", function(){
//     fClassEventHandler(true);
// });
// document.getElementById("minus-btn").addEventListener("click", function(){
//     fClassEventHandler(false);
// });
// function fClassEventHandler(isIncrease){
//     const fCountInput = document.getElementById("fClass-count");
//     const newFCountInput = parseFloat(fCountInput.value);
//     let fCount = newFCountInput;
//     if(isIncrease == true){
//         fCount = newFCountInput + 1;
//     }
//     if(isIncrease == false && newFCountInput > 0){
//         fCount = newFCountInput - 1;
//     }
//     fCountInput.value = fCount;
//     subTotalEvent();
// }

// document.getElementById("ePlus-btn").addEventListener("click", function(){
//     eClassEventHandler(true);
// });
// document.getElementById("eMinus-btn").addEventListener("click", function(){
//     eClassEventHandler(false);
// });
// function eClassEventHandler(isIncrease){
//     const eCountInput = document.getElementById("eClass-count");
//     const newECountInput = parseFloat(eCountInput.value);
//     let eCount = newECountInput;
//     if(isIncrease == true){
//         eCount = newECountInput + 1;
//     }
//     if(isIncrease == false && newECountInput > 0){
//         eCount = newECountInput - 1;
//     }
//     eCountInput.value = eCount;
    
// }

// function subTotalEvent(){
//     const fClassPrice = document.getElementById("fClass-count");
//     const newFClassPrice = parseFloat(fClassPrice.value);
//     const eClassPrice = document.getElementById("eClass-count");
//     const newEClassPrice = parseFloat(eClassPrice.value);
//     subTotalPrice = newFClassPrice * 150 + newEClassPrice * 100;
//     document.getElementById("sub-total").innerText = subTotalPrice;
// }