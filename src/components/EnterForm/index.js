import creatNewElement from '../CommonElements';
import './index.scss';

export const creatEnterForm = () => {
const enterForm = creatNewElement('DIV', 'enter-form',  'enter-form');
const enterContent = creatNewElement('DIV', 'enter-content',  'enter-content');
const enterCloseSpan = creatNewElement('DIV', 'enter-close', 'enter-close');
enterCloseSpan.textContent = '\u00D7';
const enterDescription_1 = creatNewElement('DIV', 'enter-description_1', 'enter-description');
enterDescription_1.textContent = '';
const enterDescription_2 = creatNewElement('DIV', 'enter-description_2', 'enter-description');
enterDescription_2.textContent = '';
const enterDescription_3 = creatNewElement('DIV', 'enter-description_3', 'enter-description');
enterDescription_3.textContent = 'отправлено подтверждение';
const enterDescription_4 = creatNewElement('DIV', 'enter-description_4', 'enter-description');
enterDescription_4.textContent = 'Спасибо за заказ!!!';
enterContent.append(enterCloseSpan, enterDescription_1, enterDescription_2, enterDescription_3, enterDescription_4);
enterForm.append(enterContent);
return enterForm;
}
