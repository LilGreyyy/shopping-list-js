const PopUp = document.getElementById('popUp');
let products = [];

window.addEventListener('load', () => {
    products = JSON.parse(localStorage.getItem("products") || "[]");
        console.log(products)
        render();
    });

    document.getElementById('newProduct').addEventListener('click', () => {
        PopUp.style.display = 'flex';
    })
    document.getElementById('addProduct').addEventListener('click', () => {
        PopUp.style.display = 'none';

    let product = {Product: Product.value, Amount: Amount.value};

    Product.value = "";
    Amount.value = "";

    products.push(product);

    render();
})
    function render() {
        let productlist = document.getElementById('productlist');
        productlist.innerHTML = "";
    
        for(let i = 0; i < products.length; i++) {
            let product = `
            <div class="product">
                <h3>Product: ${products[i].Product}</h3> 
                <h3>Amount: ${products[i].Amount}</h3>
            </div>`;
    
            productlist.innerHTML += product;
        }
    
        localStorage.setItem("products", JSON.stringify(products))
    }