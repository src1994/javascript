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

    getAllProducts() {
        return this.products;
    }

    getAllProductsNames() {
        return this.products.map(product => product.name).join(';');
    }

    getProductsById(id) {
        return this.products.find(product => product.id == id);
    }

    getProductByName(name) {
        return this.products.find(product => product.name.toLowerCase() == name.toLowerCase()); //comparar tudo em minusculas
    }

    
}