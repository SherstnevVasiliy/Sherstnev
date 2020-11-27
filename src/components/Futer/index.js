
import './index.scss';
import creatNewElement from '../CommonElements';

const creatFuter = function () {

const futer = creatNewElement('DIV', 'futer', 'futer');
const futerConteiner = creatNewElement('DIV', 'futer-container', 'container')
futer.append(futerConteiner);
const futerWrap = creatNewElement('DIV', 'futer-wrap', 'futer-wrap')
futerConteiner.append(futerWrap);
const vazLogo = creatNewElement('IMG');
const picVaz = require('../../assets/images/vaz.jpg');
vazLogo.src = picVaz;
const mazLogo = creatNewElement('IMG');
const picMaz = require('../../assets/images/maz.jpg');
mazLogo.src = picMaz;
const uazLogo = creatNewElement('IMG');
const picUaz = require('../../assets/images/uaz.jpg');
uazLogo.src = picUaz;
const kamazLogo = creatNewElement('IMG');
const picKamaz = require('../../assets/images/kamaz.png');
kamazLogo.src = picKamaz;

const vazLogoA = creatNewElement('A', '', 'pointer');
vazLogoA.href = 'https://www.lada.ru/';
vazLogoA.target="_blank";
const mazLogoA = creatNewElement('A', '', 'pointer');
mazLogoA.href = 'http://maz.by/';
mazLogoA.target="_blank";
const uazLogoA = creatNewElement('A', '', 'pointer');
uazLogoA.href = 'https://www.uaz.ru/';
uazLogoA.target="_blank";
const kamazLogoA = creatNewElement('A', '', 'pointer');
kamazLogoA.href = 'https://kamaz.ru/';
kamazLogoA.target="_blank";

vazLogoA.append(vazLogo);
mazLogoA.append(mazLogo);
uazLogoA.append(uazLogo);
kamazLogoA.append(kamazLogo);

futerWrap.append(vazLogoA, mazLogoA, uazLogoA, kamazLogoA)

return futer;

}

export { creatFuter };