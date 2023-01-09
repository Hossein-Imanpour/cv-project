fetch('http://api.anidb.net:9001/httpapi?request=anime')
.then(res => {
    res.json()
}).then(data => {
    console.log(data);
})

const burger = document.querySelector(".burger")
const mobileNav =document.querySelector('.mobile-nav') 
burger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
    mobileNav.classList.toggle('is-active')
})