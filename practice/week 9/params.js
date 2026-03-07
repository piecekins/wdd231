// params.js
const products = [
  { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
  { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
  { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
];

console.log(window.location)

function getParams(param){
    const params = new URLSearchParams(param)
    return params.get("id");
}




function productTemplate(product){

    return `<h2>Product Details</h2>

    <section class="product">
        <img src="${product.image}" alt="">
        <div>
            <h3>${product.name}</h3>
            <p>Price $${product.price}</p>
        
        </div>
        </section>`
}

function getProductDetails(){
    const param = getParams(window.location.search);
    if (param){
        const product = products.find(product => param == product.id);
        if (product){
            const html = productTemplate(product)
            const main = document.querySelector("main")
            main.innerHTML = html;
        }
        
    }
    

}
getProductDetails()