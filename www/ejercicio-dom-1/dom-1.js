'use strict';

const p = document.querySelector('p');
//console.log(p);

const textInP = p.innerHTML;
//console.log(textInP);

const wordsInP = textInP.split(' ');
//console.log(wordsInP);

const newHtml = wordsInP.reduce((acc, word) => {
    if (word.length > 5) {
        return acc + ' ' + '<em>' + word + '</em>';
    } else {
        return acc + ' ' + word;
    }
}, '');
//console.log(newHtml);

p.innerHTML = newHtml;
