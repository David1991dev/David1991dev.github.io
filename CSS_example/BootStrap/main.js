console.log("Hali");


function calcAmount(){
    let feltetName = document.getElementById("top-input").value;
    let price = 1500;
    let quantity = document.querySelector("input[name='amount-input']").value;    
    let quantityNumberType = parseInt(quantity);
    quantityNumberType = isNaN(quantityNumberType) ? 0 :quantityNumberType;
    showAmountFunction(price);
}


function showAmountFunction(quantity, price){    
    quantity = quantity || 0;
    let showAmount = document.querySelector("span.show-amount");
    if (quantity > 10){
        alert("Ennyi hamburgert sajnos nem tudsz rendelni")
    }else if(quantity<1){
        alert("minimum 1 terméket kell vásárolnod")
    }else{
        let amount = quantity * price;
        showAmount.innerHTML = amount;
    }
}





