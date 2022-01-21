// Created by monkey_K1n9
// This app implements a smooth scrolling, fixed navbar with switch menu, and scroll to top. 

const links = document.querySelectorAll(".nav-list li a")
const navList = document.querySelector(".nav-list")

for (link of links) {
    link.addEventListener("click", smoothScroll)
}

navList.addEventListener("click", (e) => {
    const navParent = e.target.parentElement
    if(navParent.classList.contains("link")) {
        navList.querySelector(".active").classList.remove("active")
        navParent.classList.add("active")
    }
})

function smoothScroll (e) {
    e.preventDefault()

    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    })
}

//Scroll to top
const scrollBtn = document.querySelector(".top")
const rootElement = document.documentElement

document.addEventListener("scroll", showBtn)
scrollBtn.addEventListener("click", scrollToTop)

function showBtn () {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if (rootElement.scrollTop / scrollTotal > 0.3) {
        scrollBtn.classList.add("show-btn")
    } else {
        scrollBtn.classList.remove("show-btn")
    }
}

function scrollToTop () {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}