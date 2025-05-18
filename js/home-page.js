'use strict'

const inputUserEmail = document.getElementById('email__input')
const sendUserEmail = document.getElementById('email__signup-button')
const products = document.querySelectorAll('.listing__card')
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
    }, 
    {
        index: null
    }, 
    {
        index: null
    }, 
    {
        index: null
    },                                                           
]

products.forEach(product =>{
    product.addEventListener('click', function() {
        let productWidth = returnImage(product)
        document.body.insertAdjacentHTML("beforeend",  
            getInfoCard(
                productWidth,
                cards[product.dataset.productIndex-1].name, 
                cards[product.dataset.productIndex-1].price,
                cards[product.dataset.productIndex-1].image
            ))
        })
})

function returnImage (image) {
    // let imageWidth = window.getComputedStyle(image, ).getPropertyValue('width')
    let imageWidth = image.offsetWidth
    let cardWidth
    // let cardWidth = document.getElementById('card-product').offsetWidth
    if (imageWidth > 305) {
        cardWidth = 80
    }
    else if (imageWidth <= 305) {
        cardWidth = 60
    }
    return cardWidth;
}



function getInfoCard(width, nameProduct, price, image) {
    opacityShow()
    return `    
    <section id = "card-product" data-window = "true" style="width:${width}%;">
        <div class="card-product__visual">
            <img 
            id = "card-product__image"
            src="${image}" 
            alt="product">
        </div>
        <div class="card-product__info">
            <div class="card-product__exit">
                <button id = "button-exit" onclick = 'windowHidden()'>X</button>
            </div>
            <div class="card-product__name-text">
                <p>${nameProduct}</p>
            </div>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            <span>Quo nam similique ipsum soluta ullam necessitatibus delectus libero error aliquid obcaecati</span>
            <span>tempore labore ea expedita recusandae aspernatur a eligendi rerum autem.</span>
            <strong>Цена: ${price}</strong>
            <button id = 'card__button-buy' onclick=''>Buy</button>
        </div>
    </section>
    `
}


const cardBuyButton = document.getElementById('card__button-buy')
