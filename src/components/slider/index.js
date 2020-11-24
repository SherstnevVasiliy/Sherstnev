// import './index.scss';
export const nodeCourusel_1 = function () {
    
const courusel = document.createElement('DIV')
courusel.id = 'carousel';
courusel.className = 'carousel';
const itemContainer = document.createElement('DIV')
itemContainer.id = 'item-container';
itemContainer.className = 'item-container';
courusel.append(itemContainer);
const couruselItem_1 = document.createElement('DIV')
couruselItem_1.id = 'item_1';
couruselItem_1.className = 'item active';
const couruselItem_2 = document.createElement('DIV')
couruselItem_2.id = 'item_2';
couruselItem_2.className = 'item';
const couruselItem_3 = document.createElement('DIV')
couruselItem_3.id = 'item_3';
couruselItem_3.className = 'item';
itemContainer.append(couruselItem_1, couruselItem_2, couruselItem_3)
const sliderImg_1 = document.createElement('IMG');
const picture_1 = require('../../assets/images/slider_1.jpg');
sliderImg_1.src = picture_1;
const sliderImg_2 = document.createElement('IMG');
const picture_2 = require('../../assets/images/slider_2.jpg');
sliderImg_2.src = picture_2;
const sliderImg_3 = document.createElement('IMG');
const picture_3 = require('../../assets/images/slider_3.jpg');
sliderImg_3.src = picture_3;
couruselItem_1.append(sliderImg_1);
couruselItem_2.append(sliderImg_2);
couruselItem_3.append(sliderImg_3);
return courusel;
}

 

