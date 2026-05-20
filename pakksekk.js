const start = document.querySelector("button")
const oppdarg = document.getElementById("oppdrag")
const svar = document.querySelector(".pakk")

start.addEventListener("click", function() {
    oppdarg.style.display = "block"
    start.style.display = "none"
    svar.style.display = "flex"

})