// Memory Button ID Call
const firstMemory = document.getElementById("first-memory")
const secondMemory = document.getElementById("second-memory")

// Storage Button ID Call
const firstStorage = document.getElementById("first-storage")
const secondStorage = document.getElementById("second-storage")
const thirdStorage = document.getElementById("third-storage")

// Choose your delivery option Button ID Call
const firstDeliveryOption = document.getElementById("first-delivery-option")
const secondDeliveryOption = document.getElementById("second-delivery-option")

// Cart Items ID Call
const bestPrice = document.getElementById("best-price")
const extraMemoryCost = document.getElementById("extra-memory-cost")
const extraStorageCost = document.getElementById("extra-storage-cost")
const deliveryCharge = document.getElementById("delivery-charge")
const totalPrice = document.getElementById("total-price")
const grandTotal = document.getElementById("grand-total")

// select functuon
function isContain(element) {
    return element.classList.contains("selected")
}

// Update Total function
function updateTotal() {
    const bestAmount = parseFloat(bestPrice.innerText)
    const extraMemoryAmount = parseFloat(extraMemoryCost.innerText)
    const extraStorageAmount = parseFloat(extraStorageCost.innerText)
    const deliveryAmount = parseFloat(deliveryCharge.innerText)
    const total = bestAmount + extraMemoryAmount + extraStorageAmount + deliveryAmount
    totalPrice.innerText = total
    grandTotal.innerText = total
}

// Memory Button Event Listener

firstMemory.addEventListener('click', function () {
    if (!isContain(firstMemory)) {
        firstMemory.classList.add("selected")
        secondMemory.classList.remove("selected")
    }
    extraMemoryCost.innerText = '0';
    updateTotal()
})
secondMemory.addEventListener('click', function () {
    if (!isContain(secondMemory)) {
        firstMemory.classList.remove("selected")
        secondMemory.classList.add("selected")
    }
    extraMemoryCost.innerText = '180';
    updateTotal()
})

//  Storage Button Event Listener

firstStorage.addEventListener('click', function () {
    if (!isContain(firstStorage)) {
        firstStorage.classList.add("selected")
        secondStorage.classList.remove("selected")
        thirdStorage.classList.remove("selected")
    }
    extraStorageCost.innerText = '0';
    updateTotal()
})
secondStorage.addEventListener('click', function () {
    if (!isContain(secondStorage)) {
        firstStorage.classList.remove("selected")
        secondStorage.classList.add("selected")
        thirdStorage.classList.remove("selected")
    }
    extraStorageCost.innerText = '100';
    updateTotal()
})
thirdStorage.addEventListener('click', function () {
    if (!isContain(thirdStorage)) {
        firstStorage.classList.remove("selected")
        secondStorage.classList.remove("selected")
        thirdStorage.classList.add("selected")
    }
    extraStorageCost.innerText = '180';
    updateTotal()
})

//  Choose your delivery option Button Event Listener
firstDeliveryOption.addEventListener('click', function () {
    if (!isContain(firstDeliveryOption)) {
        firstDeliveryOption.classList.add("selected")
        secondDeliveryOption.classList.remove("selected")
    }
    deliveryCharge.innerText = '0';
    updateTotal()
})
secondDeliveryOption.addEventListener('click', function () {
    if (!isContain(secondDeliveryOption)) {
        firstDeliveryOption.classList.remove("selected")
        secondDeliveryOption.classList.add("selected")
    }
    deliveryCharge.innerText = '20';
    updateTotal()
})