const productService = new ProductService(data)
const cartService = new CartService()



cartService.add(productService.get(1))
cartService.add(productService.get(1))
cartService.add(productService.get(2))
cartService.add(productService.get(3))
cartService.add(productService.get(3))
cartService.add(productService.get(3))
cartService.add(productService.get(12))

cartService.remove(productService.get(12).id)

cartService.clear()

console.log(productService.getById(5))

console.log(cartService.getInfo())

// console.log(productService.filterBy('pla'))

