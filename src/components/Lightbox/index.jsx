import "./lightbox.scss"
import { Image } from "minista"
import { ReactComponent as NextSVG } from "@/assets/icons/icon-next.svg"
import { ReactComponent as PreviousSVG } from "@/assets/icons/icon-previous.svg"
import { ReactComponent as CloseSVG } from "@/assets/icons/icon-close.svg"

export default () => {
    return (
        <section className="wrapperLightbox" data-js-lightBox-wrapper>
            <section className="lightboxSection" data-js-lightBox>
                <div className="lightboxSection__divImage">
                    <Image src="/src/assets/images/image-product-1.jpg" className="lightboxSection__divImage__image" data-js-mainImage-lightBox/>
                    <button className="lightboxSection__divImage__previous" data-js-button-previous-lightBox><PreviousSVG /></button>
                    <button className="lightboxSection__divImage__next" data-js-button-next-lightBox><NextSVG /></button>
                    <button className="lightboxSection__divImage__close" data-js-close-lightBox><CloseSVG /></button>
                </div>
                <div className="lightboxSection__divButtons">
                    <button className="lightboxSection__divButtons__item" data-js-buttons-images-lightBox>
                        <Image src="/src/assets/images/image-product-1-thumbnail.jpg" className="lightboxSection__divButtons__item-image"/>
                    </button>
                    <button className="lightboxSection__divButtons__item" data-js-buttons-images-lightBox>
                        <Image src="/src/assets/images/image-product-2-thumbnail.jpg" className="lightboxSection__divButtons__item-image"/>
                    </button>
                    <button className="lightboxSection__divButtons__item" data-js-buttons-images-lightBox>
                        <Image src="/src/assets/images/image-product-3-thumbnail.jpg" className="lightboxSection__divButtons__item-image"/>
                    </button>
                    <button className="lightboxSection__divButtons__item" data-js-buttons-images-lightBox>
                        <Image src="/src/assets/images/image-product-4-thumbnail.jpg" className="lightboxSection__divButtons__item-image"/>
                    </button>
                </div>
            </section>
        </section>
    )
}