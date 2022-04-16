const popup = document.getElementById('popup'),
    accept = document.getElementById('accept'),
    deny = document.getElementById('deny'),
    input = document.getElementById('username'),
    confirm = document.getElementById('confirm');

function saveUsername() {
    popup.classList.add('shown');

    [accept, deny].forEach(each => {
        each.addEventListener('click', e => {
            if (e.currentTarget == accept) {
                deny.classList.remove('chosen');
                accept.classList.add('chosen');
                input.classList.add('shown');
            } else {
                deny.classList.add('chosen');
                accept.classList.remove('chosen')
                input.classList.remove('shown');
            }
        })
    })

    const users = ['/img/users/alien.svg', '/img/users/astronaut.svg', '/img/users/cat.svg', '/img/users/cop.svg', '/img/users/cowboy.svg', '/img/users/dog.svg', '/img/users/ninja.svg']

    confirm.addEventListener('click', () => {
        if (accept.classList.contains('chosen')) {
            localStorage.setItem('username', input.value);
            let userpic = users[Math.floor(Math.random() * users.length)];
            localStorage.setItem('userpic', userpic);
        } else {
            localStorage.setItem('username', 'Anônimo');
            localStorage.setItem('userpic', '/img/users/anonymous.svg');
        }
        popup.classList.remove('shown');
        document.location.reload();
    })
}

function useUsername() {
    const autorRes = document.querySelector('input[name="autorRes"]'),
        autorPerg = document.querySelector('input[name="autorPerg"]'),
        autorPic = document.querySelector('input[name="autorPic"]');

    if(autorPerg) autorPerg.value = localStorage.getItem("username");
    if(autorRes) autorRes.value = localStorage.getItem("username");

    autorPic.value = localStorage.getItem("userpic");
}

localStorage.getItem("username") === null ? saveUsername() : useUsername();

