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

let id = 0; //UUID
function createItem(text) {
    const itemRow = document.createElement('li'); 
    itemRow.setAttribute('class', 'item__row');
    itemRow.innerHTML = `
            <li class="item__row" data-id=${id}>
                  <div class="item">
                      <div class="item__name">${text}</div>
                      <button class="item__delete" data-id=${id}>
                          <img src="image/trash-can.png" alt="">
                      </button>
                  </div>
                  <div class="item__divider"></div>
              </li>
              `;
    id++;
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

items.addEventListener('click', event => {
    console.log('he');
});