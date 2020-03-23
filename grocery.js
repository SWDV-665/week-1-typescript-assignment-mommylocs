var Grocery = /** @class */ (function () {
    function Grocery(brand, product, quantity) {
        this.brand = brand;
        this.product = product;
        this.quantity = quantity;
        this.grocerList = "Brand: " + brand + ", Product: " + product + ", Quantity1: " + quantity;
    }
    return Grocery;
}());
function groceriesList(list) {
    return "Product: " + list.product + ", Brand: " + list.brand + ", Quantity: " + list.quantity;
}
var groceryArray = new Grocery("Drink", "Juicy Juice", 8);
document.body.textContent = groceriesList(groceryArray);
