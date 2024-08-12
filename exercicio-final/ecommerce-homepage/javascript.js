const apiProducts = "https://fakestoreapi.com/products"

const divProductGrid = document.createElement ("div");
document.body.append(divProductGrid)

divProductGrid.className = "product-grid";
divProductGrid.id = "product-grid";
divProductGrid.style.display = "grid";
divProductGrid.style.marginRight = "auto";
divProductGrid.style.marginLeft = "auto";
divProductGrid.style.gridTemplateColumns = "repeat(5, 1fr)";
divProductGrid.style.gap = "10px";
divProductGrid.style.width = "100vh";

async function fetchDisplayProducts() {
    try{
     //fetch products
     const response = await fetch(apiProducts);
     const products = await response.json();
     
     //display grid
     createProductsGrid(products);
   
 
    }catch(error){
     console.log("Erro!");
    }
 }
 fetchDisplayProducts();
 
 
 function createProductsGrid(products) {
     const productGrid = document.getElementById('product-grid');
     products.forEach(product => {
         const productCard = document.createElement("div");
         productCard.className = "product";
         productCard.style.position = "relative";
         productCard.style.height = "350px";
         const img = document.createElement("img");
         img.src = product.image;
         img.alt = product.title;
         img.style.width = "100%";
         img.style.height = "200px";
         img.style.objectFit= "scale-down";
         const h6 = document.createElement("h6");
         h6.textContent = product.title;
         productCard.appendChild(img);
         productCard.appendChild(h6);
         productCard.style.padding = "10px";
         productGrid.appendChild(productCard);
         createAddCartButton(productCard, product)
       });
     }

     function createAddCartButton(productCard, product) {
        const button = document.createElement("button");
        button.className = "add-cart";
        button.dataset.productId = product.id;
        button.textContent = "Add to cart";
        productCard.appendChild(button);
        button.style.position = "absolute";
        button.style.bottom = "10px";
        button.style.border = "none";
        button.style.backgroundColor = "black";
        button.style.padding = "15px 32px";
        button.style.color = "white";
        button.style.cursor = "pointer";
  
      }