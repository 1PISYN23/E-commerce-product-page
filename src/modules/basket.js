import imageBasket from "/src/assets/images/image-product-1-thumbnail.jpg"
import deleteSVG from "/src/assets/icons/icon-delete.svg"

const initBasketMenu = () => {
    console.log("There is basket")
    const buttonOpenBasketElement = document.querySelector("[data-js-basket-open]")
    const basketMenuElement = document.querySelector("[data-js-basket]")
    const buttonMinusElement = document.querySelector("[data-js-button-minus]")
    const buttonPlusElement = document.querySelector("[data-js-button-plus]")
    const buttonAddToCartElement = document.querySelector("[data-js-button-addCart]")
    const spanCountElement = document.querySelector("[data-js-span-count]")
    const basketHasSpanElement = document.querySelector("[data-js-basket-has]")
    const basketDivGoodElement = document.querySelector("[data-js-basket-goodDiv]")

    let basketCount  = 0
    let count = 0

    buttonOpenBasketElement.addEventListener("click", (event) => {
        event.stopPropagation()
        basketMenuElement.classList.toggle("active")

    })

    document.addEventListener("click", (event) => {
        if (!buttonOpenBasketElement.contains(event.target) && !basketMenuElement.contains(event.target)) {
            basketMenuElement.classList.remove("active")
        }
    })

    const minusElement = () => {
        if (count > 0) {
            spanCountElement.textContent = count - 1
            count --
        } 
    }

    buttonMinusElement.addEventListener("click", () => {minusElement()})

    buttonPlusElement.addEventListener("click", () => {
        spanCountElement.textContent = count + 1
        count ++
    })

    const addGoodToBasket = () => {
        basketDivGoodElement.innerHTML = `
            <div class="basketSection__div__sneakers">
                <img src="${imageBasket}" class="basketSection__div__sneakers__imageItem"/>
                <p class="basketSection__div__sneakers__div-text">Fall Limited Edition Sneakers
                    <br/>$125 x 3 <b data-js-total-sum>$${125 * basketCount }</b></p>
                <button class="basketSection__div__sneakers__button" data-js-button-deleteGood>
                    <img src="${deleteSVG}" />
                </button>
            </div>
            <button class="basketSection__div__button" data-js-button-checkout>Checkout</button>
        `
    }

    basketDivGoodElement.addEventListener("click", (event) => {
        if (event.target.closest("[data-js-button-deleteGood]")) {

            basketHasSpanElement.classList.remove("active")
            // basketHasSpanElement.textContent = ""
            count = 0
            basketCount  = 0
            spanCountElement.textContent = 0 
            basketDivGoodElement.innerHTML = `
                <div class="basketSection__div">
                    <p class="basketSection__div__text">Your cart is empty.</p>
                </div>
            `
        }
    })

    basketDivGoodElement.addEventListener("click", (event) => {
        if (event.target.closest("[data-js-button-checkout]")) {
            window.location.reload()
        }
    })

    const changeCountGood = () => {
        basketCount  += count
        if (basketHasSpanElement.classList.contains("active")) {
            basketHasSpanElement.classList.remove("active")
            setTimeout(() => {
                basketHasSpanElement.textContent = basketCount  
                basketHasSpanElement.classList.add("active")
            }, 300)
        } else {
            basketHasSpanElement.textContent = basketCount  
            basketHasSpanElement.classList.add("active")
        }       
        spanCountElement.textContent = 0
    }

    buttonAddToCartElement.addEventListener("click", () => {
        if (count > 0) {
            changeCountGood()
            count = 0
            addGoodToBasket()
        }
    })


}

export default initBasketMenu