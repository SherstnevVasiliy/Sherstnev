import creatNewElement from '../CommonElements';
import './index.scss';


export const creatLeftMenu = () => {
const leftMenuSection = creatNewElement('DIV', 'left-section', 'left-section');
const sectionMenuList = creatNewElement('UL', 'section-menu-list', 'section-menu-list');

const divMenu1Text = creatNewElement('DIV','' ,'smenu-list main');
const divMenu2Text = creatNewElement('DIV','' ,'smenu-list consumer');
const divMenu3Text = creatNewElement('DIV','' ,'smenu-list buisines');
const divMenu4Text = creatNewElement('DIV','' ,'smenu-list all');

const menu1Text = creatNewElement('A');
menu1Text.textContent = 'Главная';
const menu2Text = creatNewElement('A');
menu2Text.textContent = 'Легковые автомобили';
const menu3Text = creatNewElement('A');
menu3Text.textContent = 'Грузовые автомобили';
const menu4Text = creatNewElement('A');
menu4Text.textContent = 'Все автомобили';

divMenu1Text.append(menu1Text);
divMenu2Text.append(menu2Text);
divMenu3Text.append(menu3Text);
divMenu4Text.append(menu4Text);

sectionMenuList.append(divMenu1Text, divMenu2Text, divMenu3Text, divMenu4Text);
leftMenuSection.append(sectionMenuList);

return leftMenuSection;
}
