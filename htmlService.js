class HTMLService {
  paintProduct(product) {
      return `
      <li>
        <img src="${product.image}" title="${product.title}" />
        <small>${product.title}</small>
        <small><strong>$${product.price}</strong></small>
    
      </li>
    `
  }

  paintProducts(products = []) {
    return products.map(this.paintProduct).join('')
  }
}