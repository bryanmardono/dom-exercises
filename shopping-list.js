const list = document.querySelector('.list')
const input = document.querySelector('#item')
const btn = document.querySelector('#btn')

function addToList() {
    const item = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.textContent = item;
    listItem.appendChild(listText);
    listBtn.textContent = 'Delete';
    listItem.appendChild(listBtn);
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
}

btn.addEventListener('click', addToList);