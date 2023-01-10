const burger = document.querySelector(".burger")
const mobileNav =document.querySelector('.mobile-nav') 
burger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
    mobileNav.classList.toggle('is-active')
})