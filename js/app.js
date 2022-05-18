const bestPriceValue = document.getElementById('best-price');

// ram price

function ramCost(cost){
    ramTotalValue.innerText = cost;
    calculation();
}

const miniRamValue = document.getElementById('8-ram');
const maxRamValue = document.getElementById('16-ram');
const ramTotalValue = document.getElementById('ram-charge');

miniRamValue.addEventListener('click' , function(){
    ramCost('0');
});

maxRamValue.addEventListener('click' , function(){
    ramCost('180');
});
// nested function 

function storageCost(cost){
    storageCostValue.innerText = cost;
    calculation();
}

// storage Price

const miniStorageValue = document.getElementById('256-storage');
const midStorageValue = document.getElementById('512-storage');
const maxStorageValue = document.getElementById('1-storage');
const storageCostValue = document.getElementById('storage-charge');

miniStorageValue.addEventListener('click' , function(){
    storageCost('0');
});

midStorageValue.addEventListener('click' , function(){
    storageCost('100');
});

maxStorageValue.addEventListener('click' , function(){
    storageCost('180')
});

// delivery charge

function deliveryCost(cost){
    deliveryChargeValue.innerText = cost;
    calculation();
}

const regularCharge = document.getElementById('regular-delivery');
const fastDelivery = document.getElementById('fast-delivery');
const deliveryChargeValue = document.getElementById('delivery-charge');

regularCharge.addEventListener('click' , function(){
    deliveryCost('0')
});

fastDelivery.addEventListener('click' , function(){
    deliveryCost('20')
});

// price calculation

const totalPriceAmount = document.getElementById('total-charge');
const finalTotalValue = document.getElementById('final-total');

function calculation(){
    const bestPrice = parseFloat(bestPriceValue.innerText);
    const ramTotal = parseFloat(ramTotalValue.innerText);
    const storageCost = parseFloat(storageCostValue.innerText);
    const deliveryCharge = parseFloat(deliveryChargeValue.innerText);

    const totalPrice = bestPrice + ramTotal + storageCost + deliveryCharge;

    totalPriceAmount.innerText = totalPrice;
    finalTotalValue.innerText = totalPrice;

    const finalTotal = parseFloat(finalTotalValue.innerText);

    return finalTotal;
};

const promoInput = document.getElementById('promo-input');
const promoApply = document.getElementById('promo-apply').addEventListener('click' , function(){
    const finalTotalCharge = calculation();
    const promoInputValue = promoInput.value;
    const promoCode = "stevekaku";
    if(promoCode.toLowerCase() == promoInputValue.toLowerCase()){
        const discount = (20/100)*finalTotalCharge;
        const mainCharge = finalTotalCharge - discount;

        finalTotalValue.innerText = mainCharge;

        promoInput.value = "";
    }

    else{
        promoInput.value = "";
    }
});