import "./mainSection.scss"
import { Image } from "minista"
import { ReactComponent as CartSVG } from "@/assets/icons/icon-cart.svg"
import { ReactComponent as MinusSVG } from "@/assets/icons/icon-minus.svg"
import { ReactComponent as PlusSVG } from "@/assets/icons/icon-plus.svg"
import { ReactComponent as NextSVG } from "@/assets/icons/icon-next.svg"
import { ReactComponent as PreviousSVG } from "@/assets/icons/icon-previous.svg"
import Lightbox from "@/components/Lightbox"

export default () => {
    return (
        <section className="mainSection">
            <article className="mainSection__firstArticle">
                <div className="mainSection__firstArticle__divImage">
                    <Image src="/src/assets/images/image-product-1.jpg" className="mainSection__firstArticle__image" data-js-mainImage/>
                    <Lightbox />
                    <button className="mainSection__firstArticle__divImage-previous" data-js-buttons-previous><PreviousSVG /></button>
                    <button className="mainSection__firstArticle__divImage-next" data-js-buttons-next><NextSVG /></button>
                </div>
                <div className="mainSection__firstArticle__buttons">
                    <button className="mainSection__firstArticle__buttons-item" data-js-buttons-images>
                        <Image src="/src/assets/images/image-product-1-thumbnail.jpg" className="mainSection__firstArticle__buttons-item__image"/>
                    </button>
                    <button className="mainSection__firstArticle__buttons-item" data-js-buttons-images>
                        <Image src="/src/assets/images/image-product-2-thumbnail.jpg" className="mainSection__firstArticle__buttons-item__image"/>
                    </button>
                    <button className="mainSection__firstArticle__buttons-item" data-js-buttons-images>
                        <Image src="/src/assets/images/image-product-3-thumbnail.jpg" className="mainSection__firstArticle__buttons-item__image"/>
                    </button>
                    <button className="mainSection__firstArticle__buttons-item" data-js-buttons-images>
                        <Image src="/src/assets/images/image-product-4-thumbnail.jpg" className="mainSection__firstArticle__buttons-item__image"/>
                    </button>
                </div>
            </article>

            <article className="mainSection__secondArticle">
                <h1 className="mainSection__secondArticle__h1">SNEAKER COMPANY</h1>
                <h2 className="mainSection__secondArticle__h2">Fall Limited Edition<br/>Sneakers</h2>
                <p className="mainSection__secondArticle__text">These low-profile sneakers are your perfect casual wear<br className="brText"/>
                    companion. Featuring a durable rubber outer sole, they’ll<br className="brText"/>
                    withstand everything the weather can offer.</p>
                <div className="mainSection__secondArticle__firstDiv">
                    <div className="mainSection__secondArticle__firstDiv-items">
                        <span className="mainSection__secondArticle__firstDiv-items__first">$125.00</span>
                        <span className="mainSection__secondArticle__firstDiv-items__second">50%</span>
                    </div>
                    <p className="mainSection__secondArticle__firstDiv-item">$250.00</p>
                </div>
                <div className="mainSection__secondArticle__secondDiv">
                    <div className="mainSectiob__secondArticle__secondDiv-items">
                        <button className="mainSectiob__secondArticle__secondDiv-items__buttonMinus" data-js-button-minus>
                            <MinusSVG />
                        </button>
                        <span className="mainSectiob__secondArticle__secondDiv-items__span" data-js-span-count>0</span>
                        <button className="mainSectiob__secondArticle__secondDiv-items__buttonPlus" data-js-button-plus>
                            <PlusSVG />
                        </button>
                    </div>
                    <button className="mainSectiob__secondArticle__secondDiv-button" data-js-button-addCart>
                        <CartSVG className="mainSectiob__secondArticle__secondDiv-button__image"/>
                        Add to cart
                    </button>
                </div>
            </article>
        </section>
    )
}