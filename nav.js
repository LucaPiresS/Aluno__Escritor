var nav = document.getElementById('nav')
var nav__perfis = document.getElementById('nav__perfis')
var btn = document.getElementById("btn")

nav.addEventListener('click', () => {
    nav__perfis.classList.toggle('nav__aberta')
    btn.classList.toggle('btn__nav__aberta')
})

