class Grocery {
    grocerList: string;
    constructor(public brand: string, public product: string, public quantity: number) {
        this.grocerList = "Brand: " + brand + ", Product: " + product + ", Quantity1: " + quantity;
    }
}

interface List {
    brand: string;
    product: string;
    quantity: number;
}

function groceriesList(list:List) {
        return "Product: " + list.product + ", Brand: " + list.brand + ", Quantity: " + list.quantity;
}

let groceryArray = new Grocery("Drink","Juicy Juice", 8);

document.body.textContent = groceriesList(groceryArray);