const shopSortingKey = document.querySelectorAll('.shop-sorting__list')

shopSortingKey.forEach(key => {
    key.addEventListener('click', function() {
        key.classList.toggle('active')
    })
});

const shopProduct = document.querySelector('.shop-main-product')

class Product {
    constructor(name, price, image, type, designer) {
        this.name = name,
        this.price = price,
        this.image = image,
        this.type = type,
        this.designer = designer
    }
}

const card1 = new Product('The Dandy chair', 250, 'images/cards/card1.svg', 'wood')
const card2 = new Product('The Lucy Lamp', 399, 'images/cards/card2.svg', 'wood')
const card3 = new Product('The Silky Vase', 125, 'images/cards/card3.svg', 'wood')
const card4 = new Product('The Sun Lamp', 275, 'images/cards/card7.svg', 'wood')
const card5 = new Product('The Yellow Chair', 315, 'images/cards/card8.svg', 'wood')


cards = [card1, card2, card3, card4, card5]

function renderCards() {
    for(let i = 0; i< cards.length; i++) {
        console.log(i)
        shopProduct.insertAdjacentHTML('afterbegin', `
            <div class="shop-main-product__card">
                <img 
                class = "shop-main-product__card-image"
                src="${cards[i].image}"
                alt="card">
                <span class = "shop-main-product__card-name-product">${cards[i].name}</span>
                <span class = "shop-main-product__card-price-product">£${cards[i].price}</span>
            </div>`)
    }
}
renderCards()

const pickCard = document.querySelectorAll('.shop-main-product__card')

pickCard.forEach(card => {
    card.addEventListener('click', function() {
        if (card.classList.contains('active')) {
            removeActiveCard()
        }
        else {
            removeActiveCard()
            card.classList.add('active')
        }
    })
})

function removeActiveCard() {
    pickCard.forEach(cards => {
    cards.classList.remove('active')
    })
}
