class Product {
    constructor(name, price, id) {
        this.name = name; 
        this.price = price;
        this.id = id;
    }
}

class Ecommerce {
    constructor(){
    this.products = [];
    this.cart = [];
    }
}