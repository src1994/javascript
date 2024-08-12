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

    addProduct(product) {
        this.products.push(product);
    }

    setProductPrice(productId, price) {
        let setPrice = thisProduct.find(p => p.id == productId);
        setPrice.price = price;
    }

}