const initBurgerMenu = () => {
    const buttonBurgerMenuOpen = document.querySelector("[data-js-burger-open]")
    const buttonBurgerMenuClose = document.querySelector("[data-js-burger-close]")
    const burgerMenuWrapper = document.querySelector("[data-js-burger-wrapper]")
    const burgerMenu = document.querySelector("[data-js-burgerMenu]")

    console.log(buttonBurgerMenuOpen)
    console.log(buttonBurgerMenuClose)
    console.log(burgerMenuWrapper)
    console.log(burgerMenu)

    buttonBurgerMenuOpen.addEventListener("click", (event) => {
        event.stopPropagation()
        burgerMenuWrapper.classList.add("active")
        burgerMenu.classList.add("active")
    })

    buttonBurgerMenuClose.addEventListener("click", (event) => {
        event.stopPropagation()
        burgerMenuWrapper.classList.remove("active")
        burgerMenu.classList.remove("active")
    })

    document.addEventListener("click", (event) => {
        if (!event.target.classList.contains("burgerSection")) {
            burgerMenuWrapper.classList.remove("active")
            burgerMenu.classList.remove("active")
        }
    })
}

export default initBurgerMenu