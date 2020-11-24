
import './assets/styles/index.scss';
import './components/slider/style.scss'
import creatNewElement from './components/CommonElements';
import { creatHeader } from './components/Header';
import { nodeCourusel_1 } from './components/slider';
import { creatLeftMenu } from './components/LeftMenu';
import { creatCard } from './components/Card'
import { cardArrayConsumer, cardArrayBuisenes } from './components/Items'
import { creatEnterForm } from './components/EnterForm'

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

//всплывающие окна

app.append(creatEnterForm());

const modal = document.getElementById("enter-form");
const btn = document.getElementsByClassName("buy");
const span = document.getElementsByClassName("enter-close")[0];

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        modal.style.display = "block";
     } 
}

span.onclick = function () {
   modal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}