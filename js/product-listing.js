let siteStatus = 'shop'
let shop = document.getElementById('shop')
let cart
const header = document.querySelector('.header')

function siteStatusChecking() {
    if (siteStatus === 'shop') {
        console.log('Сейчас открыт магазин')
    }
    else if (siteStatus === 'cart') {
        console.log('Сейчас открыта корзина')

    }
}

function showShop() {
    siteStatus = 'shop'
    return`
        <!-- <section class = "product-details">
        <div class="product-details__image-slot">
            <img
            id = "product-details__current-product-image"
            src="/images/cards/card6.svg"
            alt="product image"
            >
        </div>
        <div class="product-details__information">
            <p class = "product-details__name" id = "product-details__current-product-name">name</p>
            <span class = "product-details__price" id = "product-details__current-product-price">123</span>
            <hr class = "product-details__separator">
            <div class="product-details__information-description">
                <span class = "product-details__information-description-name">Product description</span>
                <span class = "product-details__information-description-text">
                    A timeless design, 
                    with premium materials features as one of our most popular and iconic pieces. 
                    The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                </span>
            </div>
            <div class="product-details__information-dimension">
                <span>Dimensions</span>
                <div class = "product-details__deminsion-wrapper">
                    <div class="product-details__height">Height
                        <span class = "product-details__dimension-value">110cm</span>
                    </div>
                    <div class="product-details__width">Width
                        <span class = "product-details__dimension-value">75cm</span>
                    </div>
                    <div class="product-details__depth">Depth
                        <span class = "product-details__dimension-value">50cm</span>
                    </div>
                </div>
            </div>
            <div class="product-details__information-quantitiy">
                <span>Quantitity</span>
                <div class="product-details__information-calc">1</div>
            </div>
            <div class="product-details__information-buttons">
                <button class = "product-details__button">Add to cart</button>
                <button class = "product-details__button">Save to favorites</button>
            </div>
        </div>
    </section>
    <section class = "listings">
        <div class="listings__inner">
            <div class="listing__header-text">
                <p>New Ceramics</p>
            </div>
            <div class="listings-product">
                <div class="listing__card">
                        <img 
                        class = "listing__card-image"
                        src="images/cards/card1.svg"
                        alt="card">
                    <span class = "listing__card-name-product">The Dandy chair</span>
                    <span class = "listing__card-price-product">£250</span>
                </div>
                <div class="listing__card">
                        <img 
                        class = "listing__card-image"
                        src="images/cards/card3.svg"
                        alt="card">
                    <span class = "listing__card-name-product">Rustic Vase Set</span>
                    <span class = "listing__card-price-product">£155</span>
                </div>
                <div class="listing__card">
                        <img 
                        class = "listing__card-image"
                        src="images/cards/card4.svg"
                        alt="card">
                    <span class = "listing__card-name-product">The Silky Vase</span>
                    <span class = "listing__card-price-product">£125</span>
                </div>
                <div class="listing__card">
                        <img 
                        class = "listing__card-image"
                        src="images/cards/card2.svg"
                        alt="card">
                    <span class = "listing__card-name-product">The Lucy Lamp</span>
                    <span class = "listing__card-price-product">£399</span>
                </div>
            </div>
            <div class="listing-view-collection">
                <a 
                href="/"
                id = "view__collection-listing">View collection
                </a>
            </div>
        </div>
    </section> -->`
}

const cards = [
    {
        index: null,
    }, 
    {
        index: null,
    }, 
    {
        index: null
    },
    {
        index: null
    }
]

const favoriteCards = []

function addToCart() {
    let i = favoriteCards.length++
    favoriteCards[i] = {}
    favoriteCards[i].name = document.getElementById('product-details__current-product-name').textContent
    favoriteCards[i].price = document.getElementById('product-details__current-product-price').textContent
    favoriteCards[i].image = document.getElementById('product-details__current-product-image').src
    favoriteCards[i].index = i+1
}

function renderCart() {
    const cartList = document.querySelector('.cart__card-list')
    cartList.innerHTML = ''
    for (let i = 0; i<favoriteCards.length; i++) {
    cartList.insertAdjacentHTML('beforeend', `
           <div class = "cart__card" data-index = "${i}">
                <div class = "cart__card-left">
                    <div class = "cart__card-image">
                        <img src="${favoriteCards[i].image}" alt="favorite image">
                    </div>
                    <div class = "cart__card-information">
                        <span class = "cart__card-information-name">${favoriteCards[i].name}</span>
                        <span class = "cart__card-information-description">A timeless ceramic vase with a tri color grey glaze.</span>
                        <span class = "cart__card-information-price">${favoriteCards[i].price}</span>
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
    if (status === 'shop') {
        shop.remove()
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
            </section>
            `  
            )
        renderCart()
    }
    else if (status === 'cart') {
        console.log('net')
    }
}

const products = document.querySelectorAll('.listing__card')
let currentProductImage = document.getElementById('product-details__current-product-image')
let currentProductName = document.getElementById('product-details__current-product-name')
let currentProductPrice = document.getElementById('product-details__current-product-price')


products.forEach(product => {
    product.addEventListener('click', function() {
    cardIndex = cards[product.dataset.productIndex-1]
    productImage = cardIndex.image,
    productName = cardIndex.name, 
    productPrice = cardIndex.price

    let productNameSelected = product.querySelector('.listing__card-name-product')
    productNameSelected.textContent = currentProductName.textContent
    cardIndex.name = currentProductName.textContent
    
    let productImageSelected = product.querySelector('.listing__card-image')
    productImageSelected.src = currentProductImage.src
    cardIndex.image = currentProductImage.src


    let productPriceSelected = product.querySelector('.listing__card-price-product')
    productPriceSelected.textContent = currentProductPrice.textContent
    cardIndex.price = currentProductPrice.textContent


    changeCurrentProduct(productImage, productName, productPrice)


    })
})

function changeCurrentProduct(image, name, price) {
    currentProductImage.src = image
    currentProductName.textContent = name
    currentProductPrice.textContent = price
}