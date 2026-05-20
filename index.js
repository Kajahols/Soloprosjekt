
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