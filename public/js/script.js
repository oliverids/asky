const body = document.body,
    themeBtn = document.getElementById('theme');

function themeLocalStorage() {
    if (localStorage.getItem('theme') === 'escuro') {
        body.classList.add('escuro');
        themeBtn.classList.add('ativo');
    } else {
        body.classList.remove('escuro');
        themeBtn.classList.remove('ativo');
    }
}
themeLocalStorage();

function setLocalStorage() {
    body.classList.contains('escuro') ? localStorage.setItem('theme', 'escuro') : localStorage.setItem('theme', 'claro');
    themeLocalStorage()
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('escuro');
    themeBtn.classList.add('ativo');
    setLocalStorage()
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('escuro');
    themeBtn.classList.toggle('ativo');
    setLocalStorage()
})

const backtop = document.getElementById('backtop');
backtop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

window.addEventListener('scroll', () => {
    let topo = body.getBoundingClientRect().top;
    topo < -700 ? backtop.classList.add('show') : backtop.classList.remove('show');
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



