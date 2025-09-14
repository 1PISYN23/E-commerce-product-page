import "./headerSection.scss"
import { Image } from "minista"
import { ReactComponent as LogoSVG } from "@/assets/icons/logo.svg"
import { ReactComponent as CartSVG } from "@/assets/icons/icon-cart.svg"
import { ReactComponent as MenuSVG } from "@/assets/icons/icon-menu.svg"
import Burger from "@/components/Burger"
import Basket from "@/components/Basket"
 
export default () => {
    return (
        <section className="section">
            <article className="section__firstArticle">
                <LogoSVG />
                <nav>
                    <ul className="section__nav">
                        <li><a href="" className="section__nav__item">Collections</a></li>
                        <li><a href="" className="section__nav__item">Men</a></li>
                        <li><a href="" className="section__nav__item">Women</a></li>
                        <li><a href="" className="section__nav__item">About</a></li>
                        <li><a href="" className="section__nav__item">Contact</a></li>
                    </ul>
                    <button className="menuIcon" data-js-burger-open><MenuSVG /></button>
                </nav>
                <Burger />
            </article>
            <article className="section__secondArticle">
                <div className="divBasket">
                    <button className="section__secondArticle__button" data-js-basket-open>
                        <CartSVG />
                        {/* <span className="section__secondArticle__button-item">3</span> */}
                    </button>
                    <span className="section__secondArticle__button-item" data-js-basket-has></span>
                    <Basket />
                </div>
                <Image src="/src/assets/images/image-avatar.png" className="section__secondArticle__avatar"/>
            </article>
        </section>
    )
}
