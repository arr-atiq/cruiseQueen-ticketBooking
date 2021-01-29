document.getElementById("plus-btn").addEventListener("click", function(){
    const fCountInput = document.getElementById("fClass-count");
    const newFCountInput = parseFloat(fCountInput.value) + 1;
    fCountInput.value = newFCountInput;
});
document.getElementById("minus-btn").addEventListener("click", function(){
    const fCountInput = document.getElementById("fClass-count");
    const newFCountInput = parseFloat(fCountInput.value) - 1;
    fCountInput.value = newFCountInput;
})