document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const addToListBtn = document.getElementById('addToListBtn');
    const number = document.getElementById('number');
    const numberList = document.getElementById('numberList');

    generateBtn.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        number.textContent = randomNumber;
    });

    addToListBtn.addEventListener('click', () => {
        const randomNumber = number.textContent;
        const listItem = document.createElement('li');
        listItem.textContent = randomNumber;
        numberList.appendChild(listItem);
    });
});