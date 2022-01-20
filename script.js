// Created by monkey_K1n9
// This app implements a smooth scrolling. Two methods can be used, one in the hmtl file at the html style and here in the JS file

const links = document.querySelectorAll(".nav-list li a")

for (link of links) {
    link.addEventListener("click", smoothScroll)
}

function smoothScroll (e) {
    e.preventDefault()

    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    })
}