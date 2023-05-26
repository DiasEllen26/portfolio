
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home_titulo', {})
sr.reveal('.home_scroll', {delay: 200})
sr.reveal('.home_img', {origin:'right', delay: 400})

sr.reveal('.sobre_img', {delay: 500})
sr.reveal('.sobre_subtitulo', {delay: 300})
sr.reveal('.sobre_profissao', {delay: 400})
sr.reveal('.sobre_texto', {delay: 500})
sr.reveal('.sobre_social-icon', {delay: 600, interval: 200})

sr.reveal('.skills_subtitulo', {})
sr.reveal('.skills_nome', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills_img', {delay: 400})

sr.reveal('.portfolio_img', {interval: 200})

sr.reveal('.contato_subtitulo', {})
sr.reveal('.contato_texto', {interval: 200})
sr.reveal('.contato__input', {delay: 400})
sr.reveal('.contato__button', {delay: 600})




