// Typing Animation
var typed = new Typed(".typing", {
    strings: [',', 'Software Engineer', 'Javascript Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

// Aside

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length
for (let i = 0; i < totalNavList; i++) {

    const a = navList[i].querySelector("a")
    a.addEventListener("click", function() {
        removeBackSection()
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j)
                    // allSection[j].classList.add("back-section")
            }

            navList[j].querySelector("a").classList.remove("active")
        }


        this.classList.add("active")
        showSection(this)
        if (window.innerWidth < 1200) {
            asideSectionTogglerButton()
        }
    })
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section")
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section")
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1]
    document.querySelector("#" + target).classList.add("active")

}

function updateNav(element) {
    for (let i = 0; i < totalSection; i++) {
        navList[i].querySelector("a").classList.remove("active")
        const target = element.getAttribute("href").split("#")[1]
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active")
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index")
    console.log(sectionIndex)
    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})

//Toggle Button
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector("aside")
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerButton();
})

function asideSectionTogglerButton() {
    aside.classList.toggle("open")
    navTogglerBtn.classList.toggle("open")
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open")
    }
}


//AgeFunction
var dob = new Date("10/24/2001")
var month_dif = Date.now() - dob.getTime()
var ag_dt = new Date(month_dif)
var year = ag_dt.getUTCFullYear()
var age = Math.abs(year - 1970)

document.getElementById("age").innerHTML = age;