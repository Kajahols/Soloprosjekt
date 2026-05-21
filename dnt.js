const crossElm = document.querySelector(".kryss")
const burgerElm = document.querySelector(".burger")
const headerElm = document.querySelector("header")

burgerElm.addEventListener("click", function () {
    headerElm.classList.add("active")
    burgerElm.style.display = "none"
})

crossElm.addEventListener("click", function () {
    headerElm.classList.remove("active")
    burgerElm.style.display = "block"
})