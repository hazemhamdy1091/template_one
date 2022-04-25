// scroll the nav bar

window.addEventListener('scroll', () => {
    document
        .querySelector('nav')
        .classList.toggle('window-scroll', window.scrollY > 100);
});

// show/ hide faq answer

const faqs = document.querySelectorAll('.faq');

// faqs.forEach(e => {
//     e.addEventListener('click' , () => {
//         e.classList.toggle('open')

//         e.firstElementChild.firstElementChild.classList.toggle('opend')
//     })
// })

// another way
faqs.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('open');

        let iconaia = e.querySelector('.faq-icon i');

        if (iconaia.className == 'fa-solid fa-plus') {
            iconaia.className = 'fa-solid fa-minus';
        } else {
            iconaia.className = 'fa-solid fa-plus';
        }
    });
});

const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
});

const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
};

closeBtn.addEventListener('click', closeNav);

// email valdation
let form = document.querySelector('form');
let email = document.querySelector('input[type = email]');
let text = document.getElementById('text');
let pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function valdation() {
    if (email.value.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = 'your Email Address in Valid';
        text.style.color = '#00ff00';
    } else if (email.value == '') {
        text.innerHTML = '';
    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = 'Please Enter valid Email';
        text.style.color = '#ff0000';
    }
}

// another Way
// email.oninput =  function () {
//     if (email.value.match(pattern) ) {
//         form.classList.add('valid')
//         form.classList.remove('invalid')
//         text.innerHTML = 'your Email Address in Valid'
//         text.style.color = '#00ff00'
//     } else {
//         form.classList.remove('valid')
//         form.classList.add('invalid')
//         text.innerHTML = 'Please Enter valid Email'
//         text.style.color = '#ff0000'
//     }
// }
