import "./header.scss"
import { Image } from "minista"
import { ReactComponent as LogoSVG } from "@/assets/icons/logo.svg"
import { ReactComponent as CartSVG } from "@/assets/icons/icon-cart.svg"
import HeaderSection from "@/sections/HeaderSection"


export default () => {
    return (
        <header className="header">
            <HeaderSection />
        </header>
    )
}