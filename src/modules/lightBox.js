import productImage1 from "../assets/images/image-product-1.jpg"
import productImage2 from "../assets/images/image-product-2.jpg"
import productImage3 from "../assets/images/image-product-3.jpg"
import productImage4 from "../assets/images/image-product-4.jpg"

const initLightBox = () => {
    console.log("There is a lightBox")
    const mainImageElement = document.querySelector("[data-js-mainImage]")
    const lightBoxWrapperElement = document.querySelector("[data-js-lightBox-wrapper]")
    const lightBox = document.querySelector("[data-js-lightBox]")
    const buttonCloseLightBoxElement = document.querySelector("[data-js-close-lightBox]")
    const buttonsImagesElements = document.querySelectorAll("[data-js-buttons-images]")
    const buttonPreviosElement = document.querySelector("[data-js-buttons-previous]")
    const buttonNextElement = document.querySelector("[data-js-buttons-next]")


    const mainImageLightBoxElement = document.querySelector("[data-js-mainImage-lightBox]")
    const buttonsImagesLightBoxElements = document.querySelectorAll("[data-js-buttons-images-lightBox]")
    const buttonPreviousLightBoxElement = document.querySelector("[data-js-button-previous-lightBox]")
    const buttonNextLightBoxElement = document.querySelector("[data-js-button-next-lightBox]")



    // const mainImages = [
    //     { image: "/images/image-product-1.jpg" },
    //     { image: "/images/image-product-2.jpg" },
    //     { image: "/images/image-product-3.jpg" },
    //     { image: "/images/image-product-4.jpg" },
    // ]

    const mainImages = [
        { image: productImage1 },
        { image: productImage2 },
        { image: productImage3 },
        { image: productImage4 },
    ]

    let buttons = []
    let buttonsLightBox = []
    let globalIndex = null

    const showImage = (index) => {
        const elements = [ mainImageElement, mainImageLightBoxElement ]
        
        elements.forEach((element) => element.classList.add("active"))
        setTimeout(() => {
            elements.forEach((element) => {
                element.src = mainImages[index].image
                element.srcset = mainImages[index].image
                element.classList.remove("active")
            })
        }, 500)
    }
 

    if (window.innerWidth > 930) {

        buttonsImagesElements.forEach((element) => {
            buttons.push(element)
        })

        buttonsImagesLightBoxElements.forEach((element) => {
            buttonsLightBox.push(element)
        })

        const setActiveButton = (activeButton) => {
            buttons.forEach((button) => {
                button.classList.remove("active")
            })
            activeButton.classList.add("active")
        }

        const setActiveButtonLight = (activeButton) => {
            buttonsLightBox.forEach((buttonLightBox) => {
                buttonLightBox.classList.remove("active")
            })
            activeButton.classList.add("active")
        }

        setActiveButton(buttons[0])
        setActiveButtonLight(buttonsLightBox[0])

        buttonsLightBox.forEach((buttonLightBox, index) => {
            buttonLightBox.addEventListener("click", () => {
                globalIndex = index
                setActiveButtonLight(buttonLightBox)
                showImage(index)
                setActiveButton(buttons[index])     
            })
        })

        // const showImage = (index) => {
        //     const elements = [ mainImageElement, mainImageLightBoxElement ]
            
        //     elements.forEach((element) => element.classList.add("active"))
        //     setTimeout(() => {
        //         elements.forEach((element) => {
        //             element.src = mainImages[index].image
        //             element.classList.remove("active")
        //         })
        //     }, 500)
        // }

        buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                globalIndex = index
                setActiveButton(button)
                showImage(index)
                setActiveButtonLight(buttonsLightBox[index])
            })
        })

        buttonPreviousLightBoxElement.addEventListener("click", () => {
            globalIndex = (globalIndex - 1 + mainImages.length) % mainImages.length
            showImage(globalIndex)
            setActiveButton(buttons[globalIndex])
            setActiveButtonLight(buttonsLightBox[globalIndex])
        })

        buttonNextLightBoxElement.addEventListener("click", () => {
            globalIndex = (globalIndex + 1) % mainImages.length
            showImage(globalIndex)
            setActiveButton(buttons[globalIndex])
            setActiveButtonLight(buttonsLightBox[globalIndex])
        })



        mainImageElement.addEventListener("click", (event) => {
            event.stopPropagation()
            lightBoxWrapperElement.classList.add("active")
        })

        buttonCloseLightBoxElement.addEventListener("click", (event) => {
            event.stopPropagation()
            lightBoxWrapperElement.classList.remove("active")
        })

        document.addEventListener("click", (event) => {
            if (!lightBox.contains(event.target) && !buttonCloseLightBoxElement.contains(event.target)) {
                lightBoxWrapperElement.classList.remove("active")
            }
        })

    } else if (window.innerWidth <= 930) {
        buttonPreviosElement.addEventListener("click", () => {
            globalIndex = (globalIndex - 1 + mainImages.length) % mainImages.length
            showImage(globalIndex)
        })

        buttonNextElement.addEventListener("click", () => {
            globalIndex = (globalIndex + 1) % mainImages.length
            showImage(globalIndex)
        })
        console.log(window.innerWidth, "Xuy")
    }

}

export default initLightBox
