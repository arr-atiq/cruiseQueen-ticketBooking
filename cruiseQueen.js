document.getElementById("plus-btn").addEventListener("click", function(){
    fClassEventHandler(true);
});
document.getElementById("minus-btn").addEventListener("click", function(){
    fClassEventHandler(false);
});
function fClassEventHandler(isIncrease){
    const fCountInput = document.getElementById("fClass-count");
    const newFCountInput = parseFloat(fCountInput.value);
    let fCount = newFCountInput;
    if(isIncrease == true){
        fCount = newFCountInput + 1;
    }
    if(isIncrease == false && newFCountInput > 0){
        fCount = newFCountInput - 1;
    }
    fCountInput.value = fCount;
    subTotalEvent();
}

document.getElementById("ePlus-btn").addEventListener("click", function(){
    eClassEventHandler(true);
});
document.getElementById("eMinus-btn").addEventListener("click", function(){
    eClassEventHandler(false);
});
function eClassEventHandler(isIncrease){
    const eCountInput = document.getElementById("eClass-count");
    const newECountInput = parseFloat(eCountInput.value);
    let eCount = newECountInput;
    if(isIncrease == true){
        eCount = newECountInput + 1;
    }
    if(isIncrease == false && newECountInput > 0){
        eCount = newECountInput - 1;
    }
    eCountInput.value = eCount;
    subTotalEvent();
}
function subTotalEvent(){
    const fClassPrice = document.getElementById("fClass-count");
    const newFClassPrice = parseFloat(fClassPrice.value);
    const eClassPrice = document.getElementById("eClass-count");
    const newEClassPrice = parseFloat(eClassPrice.value);
    subTotalPrice = newFClassPrice * 150 + newEClassPrice * 100;
    document.getElementById("sub-total").innerText = subTotalPrice;
}