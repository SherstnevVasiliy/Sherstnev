import creatNewElement from '../CommonElements';
import './index.scss';

export const creatHeader = () => {
const headerDiv = creatNewElement('HEADER');
const headerContainer = creatNewElement('DIV', 'header-container', 'container');
const headerInfo = creatNewElement('DIV', 'header-info', 'header-info');
const headerInfoLeft = creatNewElement('DIV', 'header-info-left', 'header-info-left');
const headerLogo = creatNewElement('DIV', 'logo', 'logo main');
const headerA = creatNewElement('A');
const headerImg = creatNewElement('IMG','' ,'pointer');
const picHeaderImg = require('../../assets/images/logo.png');
headerImg.src  = picHeaderImg;
headerA.append(headerImg);
headerLogo.append(headerA);
const headerTopMenu = creatNewElement('NAV', 'top-menu', 'top-menu');
const headerTopMenuList = creatNewElement('UL', 'top-menu-list', 'top-menu-list');

// const li_1L = creatNewElement('LI');
// const li_2L = creatNewElement('LI');
// const li_3L = creatNewElement('LI');

const li1Text = creatNewElement('A','' ,'pointer main')
li1Text.textContent = 'Главная';
const li2Text = creatNewElement('A','' ,'pointer consumer')
li2Text.textContent = 'Легковые автомобили';
const li3Text = creatNewElement('A','' ,'pointer buisines')
li3Text.textContent = 'Грузовые автомобили';

// li_1L.append(li1Text);
// li_2L.append(li2Text);
// li_3L.append(li3Text);

headerTopMenuList.append(li1Text, li2Text, li3Text);
headerTopMenu.append(headerTopMenuList);

headerInfoLeft.append(headerLogo, headerTopMenu);

const headerInfoRight = creatNewElement('DIV', 'header-info-rigt', 'header-info-right');
const headerForm = creatNewElement('DIV', 'header-form', 'header-form');
const headerFormList = creatNewElement('UL', 'header-form-list', 'header-form-list');

const headerFormA1 = creatNewElement('A','open-registr-form' ,'pointer');
headerFormA1.textContent = 'Регистрация'
const headerFormA2 = creatNewElement('A','open-enter-form' ,'pointer');
headerFormA2.textContent = 'Вход';
headerFormList.append(headerFormA1, headerFormA2);
headerForm.append(headerFormList);
headerInfoRight.append(headerForm);

headerInfo.append(headerInfoLeft, headerInfoRight);
headerContainer.append(headerInfo);
headerDiv.append(headerContainer);

return headerDiv;
}