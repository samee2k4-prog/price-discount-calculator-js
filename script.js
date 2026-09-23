let productName = "Smart Watch";
let basePrice = 600;
let discountPercent = 10;
let taxRate = 5;
let stockStatus = "in_stock"; // 'in_stock', 'limited', 'out_of_stock'

function calculateDiscountedPrice(price, discount) {
    let discountAmount = (price * discount) / 100;
    return price - discountAmount;
}

function calculateTax(price, taxRate) {
    return (price * taxRate) / 100;
}

function calculateFinalPrice(price, discount, taxRate) {
    let discountedPrice = calculateDiscountedPrice(price, discount);
    let taxAmount = calculateTax(discountedPrice, taxRate);
    return discountedPrice + taxAmount;
}

function isFreeShipping(finalPrice) {
    if (finalPrice >= 500) {
        return "Free Shipping";
    } else {
        return "Shipping: Rs.49";
    }
}

function getStockMessage(status) {
    if (status === "in_stock") {
        return "In Stock";
    } else if (status === "limited") {
        return "Limited Stock";
    } else {
        return "Out of Stock";
    }
}

let discountedPrice = calculateDiscountedPrice(basePrice, discountPercent);
let taxAmount = calculateTax(discountedPrice, taxRate);
let finalPrice = calculateFinalPrice(basePrice, discountPercent, taxRate);
let shipping = isFreeShipping(finalPrice);
let stockMessage = getStockMessage(stockStatus);

console.log("----- PRODUCT PRICE SUMMARY -----");
console.log("Product Name:", productName);
console.log("Base Price:", basePrice);
console.log("Discounted Price:", discountedPrice);
console.log("Tax Amount:", taxAmount);
console.log("Final Price:", finalPrice);
console.log("Shipping:", shipping);
console.log("Stock Status:", stockMessage);