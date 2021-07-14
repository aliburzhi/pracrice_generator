'use strict';

// const alphabet = "abcdefghijklmnopqrstuvwxyz012345678";
let result = [];

let mainBtn = document.querySelector('.floating-button');
let mainInput = document.querySelector('.main-input');

// mainBtn.addEventListener('click', () => {
//     let result = Math.random(alphabet).toString(36).substr(2, 5);
//     mainInput.value = result;
//     if (result == result.split('').reverse().join('')) {
//         console.log(result + ' is palindrome.');
//     }
// });

mainBtn.addEventListener('click', makeSomeString);

function makeSomeString() {
    for (var i = 0; i < 5; i++)
        result = Math.random().toString(36).substring(10);
        mainInput.value = result;
        mainInput.classList.add('black');
    if (result.includes('0')) {
        console.log('Есть 0, попробуй ещё ;)');
        mainInput.value = '';
    } else if (result == 'number') {
        console.log('Тут только цифры ;)');
    } else if (result == result.split('').reverse().join('')) {
        mainInput.value = result;
        mainInput.classList.remove('black');
        mainInput.classList.remove('blue');
        mainInput.classList.add('red');
        console.log('Палиндром, попробуй ещё ;)');
    }
}

// setInterval(makeSomeString, 500);