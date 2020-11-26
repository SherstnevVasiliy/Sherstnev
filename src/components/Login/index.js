import creatNewElement from '../CommonElements';
import './index.scss';


export const creatLoginForm = () => {

const loginForm = creatNewElement('DIV', 'login-form', 'login-form');
const loginWrap = creatNewElement('DIV', 'login-wrap', 'login-wrap');
const loginDescription = creatNewElement('DIV', 'login-dscr', 'login-dscr')
loginDescription.textContent = 'Войти';

const userName = creatNewElement('DIV', 'user-name', 'user-name');
const inputUserName = creatNewElement('input', 'input-user-name', 'input-user-name');
inputUserName.placeholder = 'user@example.com'

const userPass = creatNewElement('DIV', 'user-pass', 'user-pass');
const inputUserPass = creatNewElement('input', 'input-user-pass', 'input-pass');
inputUserPass.placeholder = 'Пароль'

const logButton = creatNewElement('DIV', 'login-btn', 'login-btn');
logButton.textContent = 'ВОЙТИ';

const closeBtn = creatNewElement('DIV', 'close-btn', 'close-btn');
const spanCloseBtn = creatNewElement('SPAN', 'span-close-btn-login', 'span-close-btn-login');
spanCloseBtn.textContent = '\u00D7';

document.body.append(loginForm);
loginForm.append(loginWrap)
loginWrap.append(closeBtn);
closeBtn.append(spanCloseBtn);
loginWrap.append(loginDescription); 
loginWrap.append(userName);  
userName.append(inputUserName);
loginWrap.append(userPass);  
userPass.append(inputUserPass);
loginWrap.append(logButton);

return loginForm;
}