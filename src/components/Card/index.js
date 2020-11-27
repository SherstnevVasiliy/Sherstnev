import creatNewElement from '../CommonElements';

export const creatCard = (urlPic, itemName, description, price, classValue, raiting) => {
const card = creatNewElement('DIV', '', classValue);
const imgCard = creatNewElement('IMG', '', 'img-card');
imgCard.src = urlPic;
const cardBody = creatNewElement('DIV', '', 'card-body');
const cardTitle = creatNewElement('H5', '', 'card-title');
cardTitle.textContent = itemName;
const cardDescription = creatNewElement('DIV', '', 'card-description');
cardDescription.textContent = description;
const cardText = creatNewElement('P', '', 'card-text');
cardText.textContent = price;
const cardBtn = creatNewElement('DIV', '', 'card-btn buy');
cardBtn.textContent = 'КУПИТЬ';
card.append(imgCard, cardBody);
cardBody.append(cardTitle, cardDescription, cardText, cardBtn);
const cardRaiting = creatNewElement('DIV', '', 'card-raiting');
for (let i = 0; i < raiting; i++) {
    let cardRaitingtar = creatNewElement('IMG');
    let picStar = require('../../assets/images/star.jpg');
    cardRaitingtar.src = picStar;
    cardRaiting.append(cardRaitingtar);
}
card.append(cardRaiting);
return card;
}

