
const knapper = document.querySelectorAll("button");



knapper.forEach(knapp => {
    knapp.addEventListener("click", function () {
        const tekst = knapp.closest(".kort").querySelector(".lesmer");

        if (tekst.style.display === "none") {
            tekst.style.display = "block";
            knapp.innerHTML = 'Les mindre <i class="fa-solid fa-angle-up"></i>';
        } else {
            tekst.style.display = "none";
            knapp.innerHTML = 'Les mer <i class="fa-solid fa-angle-down"></i>';
        }
    });
});

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

const bildeElm = document.getElementById("bilde")
const seksjon = document.getElementById("tur")
let venstre = 50
let xfart = 3

function flyttBilde() {
    venstre += xfart
    bildeElm.style.left = venstre + "px"
    // (Ballongen er 100px i bredden)
    if (venstre >= seksjon.offsetWidth - 100
        || venstre <= 0) {
        // Snu retning på farten:
        xfart = -xfart
    }

}
setInterval(flyttBilde, 10);
