const backtop = document.getElementById('backtop');
backtop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

window.addEventListener('scroll', () => {
    let body = document.body,
        topo = body.getBoundingClientRect().top;
    topo < -700 ? backtop.classList.add('show') : backtop.classList.remove('show')
})

const toggleMenu = document.getElementById('toggleMenu'),
    asideMenu = document.getElementById('aside');

toggleMenu.addEventListener('click', () => {
    [asideMenu, toggleMenu].forEach(e => e.classList.toggle('ativo'))
});

window.addEventListener('click', e => {
    if (asideMenu.classList.contains('ativo') && !asideMenu.contains(e.target) && !toggleMenu.contains(e.target)) {
        [asideMenu, toggleMenu].forEach(e => e.classList.remove('ativo'))
    }
});

const themeBtn = document.getElementById('theme');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('escuro');
    themeBtn.classList.toggle('ativo')
})
