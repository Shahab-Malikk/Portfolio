//Toggle Style Switcher
const styleSwitcher = document.querySelector(".style-switcher-toggler");
styleSwitcher.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})

// Remove Style switcher on scroll

window.addEventListener("scroll", () => {
        if (document.querySelector(".style-switcher").classList.toggle("open")) {
            document.querySelector(".style-switcher").classList.remove("open")
        }
    })
    // Theme Colors
const alternateStyles = document.querySelectorAll(".alternate-style");;

function setActiveStyle(color) {

    alternateStyles.forEach(
        (style) => {
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
            } else {
                style.setAttribute("disabled", "true");
            }
        }
    )


}


// Theme Light and Dark
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})