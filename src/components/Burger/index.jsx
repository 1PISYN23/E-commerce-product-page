import "./burger.scss";
import { ReactComponent as CloseSVG } from "@/assets/icons/icon-close.svg"

export default () => {
    return (
        <section className="wrapper" data-js-burger-wrapper>
            <section className="burgerSection" data-js-burgerMenu>
                <button className="burgerSection__buttonClose" data-js-burger-close><CloseSVG /></button>
                <nav>
                    <ul className="burgerSection__nav">
                        <li><a href="" className="burgerSection__nav__item">Collections</a></li>
                        <li><a href="" className="burgerSection__nav__item">Men</a></li>
                        <li><a href="" className="burgerSection__nav__item">Women</a></li>
                        <li><a href="" className="burgerSection__nav__item">About</a></li>
                        <li><a href="" className="burgerSection__nav__item">Contact</a></li>
                    </ul>
                </nav>
            </section>
        </section>
    )
}