
import './assets/styles/index.scss';
import './components/slider/style.scss'
import creatNewElement from './components/CommonElements';
import { creatHeader } from './components/Header';
import { nodeCourusel_1 } from './components/slider';
import { creatLeftMenu } from './components/LeftMenu';
import { creatCard } from './components/Card'
import { cardArrayConsumer, cardArrayBuisenes } from './components/Items'
import { creatEnterForm } from './components/EnterForm'
import { creatLoginForm } from './components/Login'
import { creatRegistrForm } from './components/registr'

const app = document.querySelector('#root');

app.append(creatHeader());

app.append(nodeCourusel_1());
let items = document.querySelectorAll('.item');
let currentItem = 0;
let slideInterval = setInterval(nextSlide,6000);
function nextSlide() {
    items[currentItem].classList.add('to-left')
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', 'to-left');
    });

    currentItem = (currentItem + 1) % items.length;

    items[currentItem].classList.add('next', 'from-right')
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', 'from-right')
        this.classList.add('active')
    });
}

const section = creatNewElement('DIV', 'section', 'section');
app.append(section);
const sectionContainer = creatNewElement('DIV', 'section-container', 'container');
section.append(sectionContainer);
const sectionWrap = creatNewElement('DIV', 'section-wrap', 'section-wrap');
sectionContainer.append(sectionWrap);

sectionWrap.append(creatLeftMenu());

const rightSectionContainer = creatNewElement('DIV', 'right-section', 'right-section')
sectionWrap.append(rightSectionContainer);
const vitrina = creatNewElement('DIV', 'vitrina', 'vitrina')
rightSectionContainer.append(vitrina);

const main = creatNewElement('DIV', 'main-banner', 'main-banner show')
rightSectionContainer.append(main);
const imgMain = creatNewElement('IMG', '', 'img-main');
const picMain = require('./assets/images/bannermain.jpg');
imgMain.src = picMain;
main.append(imgMain);

// БЛОК ВИТРИНА

const creatVitrinaConsumer = () => {
    for (let i = 0; i < cardArrayConsumer.length; i++) {
        let card = [];
        card[i] = creatCard(cardArrayConsumer[i].pic, cardArrayConsumer[i].name, cardArrayConsumer[i].price, 'card consumer-item hiden');
        vitrina.append(card[i]);
    }
};

const creatVitrinaBuisines = () => {
    for (let i = 0; i < cardArrayBuisenes.length; i++) {
        let card = [];
        card[i] = creatCard(cardArrayBuisenes[i].pic, cardArrayBuisenes[i].name, cardArrayBuisenes[i].price, 'card buisines-item hiden');
        vitrina.append(card[i]);
    }
};

creatVitrinaConsumer();
creatVitrinaBuisines();

const consumerList = document.querySelectorAll('.consumer');


consumerList.forEach(list => list.addEventListener('click', function () {
    let hidenList = document.querySelectorAll('.consumer-item');
    for (let i = 0; i < hidenList.length; i++) {
        if (hidenList[i].className.indexOf('hiden') != -1) {
            hidenList[i].classList.remove('hiden');
            hidenList[i].classList.add('show');
        }
    }
    hidenList = document.querySelectorAll('.buisines-item');
    for (let i = 0; i < hidenList.length; i++) {
        if (hidenList[i].className.indexOf('show') != -1) {
            hidenList[i].classList.remove('show');
            hidenList[i].classList.add('hiden');
        }
    }
    let mainSelector = document.querySelector('.main-banner');
    console.log(mainSelector)
    if (mainSelector.className.indexOf('show') != -1) {
        mainSelector.classList.remove('show');
        mainSelector.classList.add('hiden');
    }
}));

const businesList = document.querySelectorAll('.buisines');
businesList.forEach(list => list.addEventListener('click', function () {
    let hidenList = document.querySelectorAll('.buisines-item');
    for (let i = 0; i < hidenList.length; i++) {
        if (hidenList[i].className.indexOf('hiden') != -1) {
            hidenList[i].classList.remove('hiden');
            hidenList[i].classList.add('show');
        }
    }
    hidenList = document.querySelectorAll('.consumer-item');
    for (let i = 0; i < hidenList.length; i++) {
        if (hidenList[i].className.indexOf('show') != -1) {
            hidenList[i].classList.remove('show');
            hidenList[i].classList.add('hiden');
        }
    }
    let mainSelector = document.querySelector('.main-banner');
    if (mainSelector.className.indexOf('show') != -1) {
        mainSelector.classList.remove('show');
        mainSelector.classList.add('hiden');
    }
}));

const allList = document.querySelectorAll('.all');
allList.forEach(list => list.addEventListener('click', function () {
    let hidenList = document.querySelectorAll('.buisines-item');
    for (let i = 0; i < hidenList.length; i++) {
        if (hidenList[i].className.indexOf('hiden') != -1) {
            hidenList[i].classList.remove('hiden');
            hidenList[i].classList.add('show');
        }
    }
    hidenList = document.querySelectorAll('.consumer-item');
    for (let i = 0; i < hidenList.length; i++) {
        if (hidenList[i].className.indexOf('hiden') != -1) {
            hidenList[i].classList.remove('hiden');
            hidenList[i].classList.add('show');
        }
    }
    let mainSelector = document.querySelector('.main-banner');
    if (mainSelector.className.indexOf('show') != -1) {
        mainSelector.classList.remove('show');
        mainSelector.classList.add('hiden');
    }
}));

const bannerList = document.querySelectorAll('.main');
bannerList.forEach(list => list.addEventListener('click', function () {
    let hidenList = document.querySelectorAll('.buisines-item');
    for (let i = 0; i < hidenList.length; i++) {
        if (hidenList[i].className.indexOf('show') != -1) {
            hidenList[i].classList.remove('show');
            hidenList[i].classList.add('hiden');
        }
    }
    hidenList = document.querySelectorAll('.consumer-item');
    for (let i = 0; i < hidenList.length; i++) {
        if (hidenList[i].className.indexOf('show') != -1) {
            hidenList[i].classList.remove('show');
            hidenList[i].classList.add('hiden');
        }
    }
    let mainSelector = document.querySelector('.main-banner');
    if (mainSelector.className.indexOf('hiden') != -1) {
        mainSelector.classList.remove('hiden');
        mainSelector.classList.add('show');
    }
}));


// FUTER

const futer = creatNewElement('DIV', 'futer', 'futer');
app.append(futer);
const futerConteiner = creatNewElement('DIV', 'futer-container', 'container')
futer.append(futerConteiner);

//Окно спасибо за покупку

app.append(creatEnterForm());

const modal = document.querySelector('.enter-form');
const btn = document.querySelectorAll('.buy');
const span = document.querySelector('.enter-close');

btn.forEach(listBtn => listBtn.addEventListener('click', function () {
modal.style.display = "block";
}));

span.addEventListener('click', function () {
   modal.style.display = "none";
});

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
 })

//  Форма авторизации

app.append(creatLoginForm());

const btnLogin = document.querySelector('#open-enter-form');
const closedLoginWindow = document.querySelector('.login-form');
const closedLoginSpan = document.querySelector('.span-close-btn-login');

btnLogin.addEventListener('click', function () {
    closedLoginWindow.style.display = "block";
});

window.addEventListener('click', function (event) {
    if (event.target == closedLoginWindow) {
        closedLoginWindow.style.display = "none";
    }
});

closedLoginSpan.addEventListener('click', function () {
    closedLoginWindow.style.display = "none";
 });

const enterLogin = document.querySelector('.login-btn');
console.log(enterLogin)

enterLogin.addEventListener('click', function () {
    const inputMailLoginValue = document.querySelector('.input-user-name').value;
    const inputPassLoginValue = document.querySelector('.input-pass').value; 
    if (inputMailLoginValue == '' || inputPassLoginValue == '') {
        alert('Поля не должны быть пустыми...');
    } else {
    localStorage.setItem('login', inputMailLoginValue);
    localStorage.setItem('password', inputPassLoginValue);
    closedLoginWindow.style.display = "none";
    document.querySelector('.input-user-name').value = '';
    document.querySelector('.input-pass').value = ''; 
    }
 });

//  Форма регистрации
app.append(creatRegistrForm());

const btnRegistr = document.querySelector('#open-registr-form');
const closedRegistrWindow = document.querySelector('.registr-form');
const closedRegistrSpan = document.querySelector('.span-close-btn-registr');

btnRegistr.addEventListener('click', function () {
    closedRegistrWindow.style.display = "block";
});

window.addEventListener('click', function (event) {
    if (event.target == closedRegistrWindow) {
        closedRegistrWindow.style.display = "none";
    }
});

closedRegistrSpan.addEventListener('click', function () {
    closedRegistrWindow.style.display = "none";
 });

const enterRegistr = document.querySelector('.registr-btn');
console.log(enterRegistr)

enterRegistr.addEventListener('click', function () {
    const inputUserRegistrValue = document.querySelector('.input-registr-user-name').value;
    const inputMailRegistrValue = document.querySelector('.input-registr-name').value;
    const inputPassRegistrValue = document.querySelector('.input-registr-pass').value; 
    if (inputUserRegistrValue == '' || inputMailRegistrValue == '' || inputPassRegistrValue == '') {
        alert('Поля не должны быть пустыми...');
    } else {
    localStorage.setItem('registrName', inputUserRegistrValue);
    localStorage.setItem('registrLogin', inputMailRegistrValue);
    localStorage.setItem('registrPassword', inputPassRegistrValue);
    closedRegistrWindow.style.display = "none";
    document.querySelector('.input-registr-user-name').value = '';
    document.querySelector('.input-registr-name').value = ''; 
    document.querySelector('.input-registr-pass').value = ''; 
    }
 });