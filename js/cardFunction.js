function renderCards() {
    for(let i = 0; i<cards.length; i++) {
        cards[i].index = i+1;
        products[i].setAttribute('data-product-index', i+1)
        const productPrice = convertPrice(products[i].querySelector('.listing__card-price-product').textContent)
        cards[i].price = productPrice
        const productName = products[i].querySelector('.listing__card-name-product')
        cards[i].name = productName.textContent
        const productImage = products[i].querySelector('.listing__card-image')
        cards[i].image = productImage.getAttribute('src');
    }

    function convertPrice(card) {
        cardPrice = card.slice(1)
        cardPrice = Number(cardPrice)
    return cardPrice
    }
}
renderCards()
