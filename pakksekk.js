const start = document.querySelector("button")
const oppdarg = document.getElementById("oppdrag")
const svar = document.querySelector(".input-rad")

start.addEventListener("click", function () {
    oppdarg.style.display = "block"
    start.style.display = "none"
    svar.style.display = "flex"

})

const inputElement = document.querySelector("input")
const liste = document.querySelector(".pakk")
const leggtil = document.getElementById("leggtil")

let click = 0

leggtil.addEventListener("click", function() {
    const liElement = document.createElement("li")
            
    liElement.innerHTML = inputElement.value
    liElement.onclick = function () {
                liElement.classList.toggle("done")
                click +=1

            }

            

    liste.appendChild(liElement)
    inputElement.value = ''
})

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