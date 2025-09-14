import "./basket.scss"
import { Image } from "minista"
import { ReactComponent as DeleteSVG } from "@/assets/icons/icon-delete.svg"


export default () => {
    return (
        <section className="basketSection" data-js-basket>
            <h3 className="basketSection__h3">Cart</h3>
            {/* <div className="basketSection__mainDiv" data-js-basket-startDiv>
                <p className="basketSection__mainDiv__text">Your cart is epmty.</p>
            </div>

            <div className="basketSection__div" data-js-basket-goodDiv>
                <div className="basketSection__div__sneakers">
                    <Image src="/src/assets/images/image-product-1-thumbnail.jpg" className="basketSection__div__sneakers__imageItem"/>
                    <p className="basketSection__div__sneakers__div-text">Fall Limited Edition Sneakers
                        <br/>$125 x 3 <b data-js-total-sum></b></p>
                    <button className="basketSection__div__sneakers__button" data-js-button-deleteGood><DeleteSVG /></button>
                </div>
                <button className="basketSection__div__button" data-js-button-checkout>Checkout</button>
            </div> */}

            <div className="basketSection__div" data-js-basket-goodDiv>
                <p className="basketSection__div__text">Your cart is epmty.</p>
            </div>
        </section>
    )
}