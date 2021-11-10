const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__btn');

function onAdd() {
    const text = input.value;
    if(text === '') {
        return;
        input.focus();
    }
    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({block: 'center'});
    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li'); 
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

     const deleteBtn = document.createElement('button');
     deleteBtn.setAttribute('class', 'item__delete');
     deleteBtn.innerHTML = '<img src="image/trash-can.png" alt="">'
     deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);  
     });

     const divide = document.createElement('div');
     divide.setAttribute('class', 'item__divider');

     item.appendChild(name);
     item.appendChild(deleteBtn);

     itemRow.appendChild(item);
     itemRow.appendChild(divide);
     return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        onAdd();
    };
});