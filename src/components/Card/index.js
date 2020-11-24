import creatNewElement from '../CommonElements';

export const creatCard = (urlPic, itemName, price, classValue) => {
const card = creatNewElement('DIV', '', classValue);
const imgCard = creatNewElement('IMG', '', 'img-card');
imgCard.src = urlPic;
const cardBody = creatNewElement('DIV', '', 'card-body');
const cardTitle = creatNewElement('H5', '', 'card-title');
cardTitle.textContent = itemName;
const cardText = creatNewElement('P', '', 'card-text');
cardText.textContent = price;
const cardBtn = creatNewElement('DIV', '', 'card-btn buy');
cardBtn.textContent = 'КУПИТЬ';
card.append(imgCard, cardBody);
cardBody.append(cardTitle, cardText, cardBtn);
return card;
}

