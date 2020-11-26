import creatNewElement from '../CommonElements';
import './index.scss';

export const creatEnterForm = () => {
const enterForm = creatNewElement('DIV', 'enter-form',  'enter-form');
const enterContent = creatNewElement('DIV', 'enter-content',  'enter-content');
const enterCloseSpan = creatNewElement('DIV', 'enter-close', 'enter-close');
enterCloseSpan.textContent = '\u00D7';
const enterDescription = creatNewElement('DIV', 'enter-description', 'enter-description');
enterDescription.textContent = 'Спасибо за покупку';
enterContent.append(enterCloseSpan, enterDescription);
enterForm.append(enterContent);
return enterForm;
}
