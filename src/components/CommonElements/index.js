const creatNewElement = (type = 'DIV', id = '', classList = '') => {
    const newElement = document.createElement(type);
    newElement.id = id;
    newElement.classList = classList;
    return newElement;
}

export default creatNewElement;