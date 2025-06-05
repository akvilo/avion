const favoriteCards = []

function addToCart() {
    let i = favoriteCards.length++
    favoriteCards[i] = {}
    favoriteCards[i].name = document.getElementById('product-details__current-product-name').textContent
    favoriteCards[i].price = convertPrice(document.getElementById('product-details__current-product-price').textContent)
    favoriteCards[i].image = document.getElementById('product-details__current-product-image').src
    favoriteCards[i].index = i+1
    function convertPrice(card) {
            cardPrice = card.slice(1)
            cardPrice = Number(cardPrice)
        return cardPrice
    }
}

function renderCart() {
    const cartList = document.querySelector('.cart__card-list')
    cartList.innerHTML = ''
    for (let i = 0; i<favoriteCards.length; i++) {
        const {image, name, price} = favoriteCards[i]
        cartList.insertAdjacentHTML('beforeend', `
           <div class = "cart__card" data-index = "${i}">
                <div class = "cart__card-left">
                    <div class = "cart__card-image">
                        <img src="${image}" alt="favorite image">
                    </div>
                    <div class = "cart__card-information">
                        <span class = "cart__card-information-name">${name}</span>
                        <span class = "cart__card-information-description">A timeless ceramic vase with a tri color grey glaze.</span>
                        <span class = "cart__card-information-price">£${price}</span>
                    </div>
                </div>
                <div class = "cart__card-quantity">
                    <span>1</span>
                </div>
                <div class="cart__card-total">
                    <span>1</span>
                </div>
            </div>
        `)
    }
}

function showCart(status) {
    if (status !== 'cart') {
        productPage?.remove()
        shop?.remove()
        
        siteStatus = 'cart'
            header.insertAdjacentHTML('afterend',`
            <section class = "cart">
                <span class = "cart__header-text">Shopping cart</span>
                <div class="cart__list">
                    <div class="cart__list-header">
                        <span>Product</span>
                        <span>Quantitity</span>
                        <span>Total</span>
                    </div>
                    <ul class = "cart__card-list">
                        <hr class = "separator">
                        <li>
                        </li>
                        <hr class = "separator">
                    </ul>
                </div>
                <div class = "cart__buy-information">
                    <div class = "cart__buy-information-total">
                        <span class = "cart__buy-information-total-price">Subtotal
                        <span class = "cart__buy-information-total-price" id = "cart__total-price">£${subtotal()}</span>
                    </div>
                    <span class = "cart__buy-information-text">Taxes and shipping are calculated at checkout</span>
                    <button id = "cart__buy-information-button">Go to checkout</button>
                </div>
            </section>
            `  
            )
        renderCart()
    }
    else if (status === 'cart') {
        console.log('net')
    }
}

function subtotal() {
        let subtotal = 0
        for (let i = 0; i<favoriteCards.length; i++) {
        if (i !== 0) {
            subtotal = favoriteCards.reduce((sum, card) => sum + +(card.price), 0)
        }
        }
        return subtotal
}
