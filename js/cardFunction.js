function renderCards() {
    for(let i = 0; i<cards.length; i++) {
        cards[i].index = i+1;
        products[i].setAttribute('data-product-index', i+1)
        const productPrice = products[i].querySelector('.listing__card-price-product')
        cards[i].price = productPrice.textContent
        const productName = products[i].querySelector('.listing__card-name-product')
        cards[i].name = productName.textContent
        const productImage = products[i].querySelector('.listing__card-image')
        cards[i].image = productImage.getAttribute('src');
    }
}
renderCards()
