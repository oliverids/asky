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
    topo < -380 ? backtop.classList.add('show') : backtop.classList.remove('show')
})