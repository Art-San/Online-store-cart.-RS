const productService = new ProductService(data)
const cartService = new CartService()
const htmlService = new HTMLService()

const productsContainer = document.getElementById('products')
const filterInput = document.getElementById('filter')

filterInput.addEventListener('input', event => {
    const value = event.target.value
   const filtredProducts = productService.filterBy(value)
   
   renderProducts(filtredProducts)
})


function renderProducts(products) {
    productsContainer.innerHTML = htmlService.paintProducts(products)
}
renderProducts(productService.products)