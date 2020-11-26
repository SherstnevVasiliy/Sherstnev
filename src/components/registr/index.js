import creatNewElement from '../CommonElements';
import './index.scss';


export const creatRegistrForm = () => {

const registrForm = creatNewElement('DIV', 'registr-form', 'registr-form');
const registrWrap = creatNewElement('DIV', 'registr-wrap', 'registr-wrap');
const registrDescription = creatNewElement('DIV', 'registr-dscr', 'registr-dscr')
registrDescription.textContent = 'РЕГИСТРАЦИЯ';

const registrUserName = creatNewElement('DIV', 'registr-user-name', 'registr-user-name');
const inputRegistrUserName = creatNewElement('input', 'input-registr-user-name', 'input-registr-user-name');
inputRegistrUserName.placeholder = 'Имя пользователя'

const registrName = creatNewElement('DIV', 'registr-name', 'registr-name');
const inputRegistrName = creatNewElement('input', 'input-registr-name', 'input-registr-name');
inputRegistrName.placeholder = 'user@example.com'

const registrPass = creatNewElement('DIV', 'registr-pass', 'registr-pass');
const inputRegistrPass = creatNewElement('input', 'input-registr-pass', 'input-registr-pass');
inputRegistrPass.placeholder = 'Пароль'

const registrButton = creatNewElement('DIV', 'registr-btn', 'registr-btn');
registrButton.textContent = 'ЗАРЕГИСТРИРОВАТЬ';

const closeRegistrBtn = creatNewElement('DIV', 'close-registr-btn', 'close-registr-btn');
const spanCloseRegistrBtn = creatNewElement('SPAN', 'span-close-btn-registr', 'span-close-btn-registr');
spanCloseRegistrBtn.textContent = '\u00D7';

document.body.append(registrForm);
registrForm.append(registrWrap)
registrWrap.append(closeRegistrBtn);
closeRegistrBtn.append(spanCloseRegistrBtn);
registrWrap.append(registrDescription); 
registrWrap.append(registrUserName);  
registrUserName.append(inputRegistrUserName);
registrWrap.append(registrName);  
registrName.append(inputRegistrName);
registrWrap.append(registrPass);  
registrPass.append(inputRegistrPass);
registrWrap.append(registrButton);

return registrForm;
}