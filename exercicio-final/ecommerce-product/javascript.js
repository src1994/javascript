// funçao para obter id a partir do query string
function getProducByIdFromUrl () {
    const urlParams = new URLSearchParams(window.location.search);
    let productId = Number(urlParams.get('productId'));
    // garantir que o id do produto é de 1 a 20
    productId = productId > 0 && productId <= 20 ? productId : 1;  
    return productId;
}

const productId = getProducByIdFromUrl();

const apiSingleProduct = `https://fakestoreapi.com/products/${productId}`

const divSingleProduct = document.createElement("div");
document.body.append(divSingleProduct);

divSingleProduct.className = "main-product-details";
divSingleProduct.id = "main-product-details";
divSingleProduct.style.display = "flex";
divSingleProduct.style.flexDirection = "row";
divSingleProduct.style.gap = "10%";
divSingleProduct.style.paddingTop = "5%";
divSingleProduct.style.justifyContent = "center";

async function fetchDisplayProductDetails() {
    try {
        
        // Fetch products
        const response = await fetch(apiSingleProduct);
        const products = await response.json();
       
        // Display one product
        createProduct(products);
       
        const apiCategory = `https://fakestoreapi.com/products/category/${encodeURIComponent(products.category)}`;
        const categoryResponse = await fetch(apiCategory);
        let categoryProducts = await categoryResponse.json();

        categoryProducts = categoryProducts.filter(p => p.id !== productId); //evitar que o produto se repita em baixo nos produtos relacionados

        createProductsGrid(categoryProducts.slice(0, 3)); // listar primeiros 3 produtos relacionados

        createFooter();

    } catch (error) {
        console.log("Error fetch products details");
    }
}
fetchDisplayProductDetails();

function createProduct(product) {
    const singleProduct = document.getElementById('main-product-details');

    const imageDetails = document.createElement('div');
    imageDetails.className = 'image-details';

    const img = document.createElement('img');
    img.style.width = "450px";
    img.style.height = "auto";
    img.src = product.image;
    img.alt = product.title;
    imageDetails.appendChild(img);

    const productsDetails = document.createElement('div');
    productsDetails.className = 'products-details';
    productsDetails.style.width = "350px"

    const titleDetails = document.createElement('div');
    titleDetails.className = 'title-details';

    const title = document.createElement('h4');
    title.textContent = product.title;
    titleDetails.appendChild(title);

    const categoryDetails = document.createElement('div');
    categoryDetails.className = 'category-details';

    const category = document.createElement('h5');
    category.textContent = product.category;
    categoryDetails.appendChild(category);

    const ratingDetails = document.createElement('div');
    ratingDetails.className = 'rating-details';

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;
    ratingDetails.appendChild(rating);

    const priceDetails = document.createElement('div');
    priceDetails.className = 'price-details';

    const price = document.createElement('p');
    price.textContent = `$${product.price}`;
    priceDetails.appendChild(price);

    const descriptionDetails = document.createElement('div');
    descriptionDetails.className = 'description-details';

    const description = document.createElement('p');
    description.textContent = product.description;
    descriptionDetails.appendChild(description);

    productsDetails.appendChild(titleDetails);
    productsDetails.appendChild(categoryDetails);
    productsDetails.appendChild(ratingDetails);
    productsDetails.appendChild(priceDetails);
    productsDetails.appendChild(descriptionDetails);

    singleProduct.appendChild(imageDetails);
    singleProduct.appendChild(productsDetails);

}

function createProductsGrid(products) {
    // criar grelha de produtos e append
    const productGrid = document.createElement('div');
    productGrid.id = 'product-grid';
    productGrid.style.display = "flex";
    productGrid.style.justifyContent = "center"
    productGrid.style.gap = "10px";
    productGrid.style.flexWrap = "wrap";
    productGrid.style.paddingTop = "100px";
    productGrid.style.paddingBottom = "100px";
    document.body.append(productGrid);


    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product";
        productCard.style.position = "relative";
        productCard.style.height = "auto";
        productCard.style.width = "400px";
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;
        img.style.width = "100%";
        img.style.height = "200px";
        img.style.objectFit = "scale-down";
        const h4 = document.createElement("h4");
        h4.style.width = "50%";
        h4.textContent = product.title;
        const price = document.createElement('p');
        price.textContent = `$${product.price}`;

        

        productCard.appendChild(img);
        productCard.appendChild(h4);
        productCard.appendChild(price);
        
        productGrid.appendChild(productCard);

       
    });
}

function createFooter() {
  
    const footer = document.createElement("div");
    footer.className = "footer-year";
    
    footer.style.width = "100%";
    footer.style.height = "100px";
    footer.style.display = "flex";
    footer.style.justifyContent = "center";
    footer.style.alignItems = "center";
    footer.style.borderTop = "0.5px solid silver";
    let = year = new Date().getFullYear();
    footer.textContent = `Copyright ${year}`;
    document.body.appendChild(footer);
}