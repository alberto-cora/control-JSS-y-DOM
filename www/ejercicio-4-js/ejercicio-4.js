'use strict';

const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

function arraySinDuplicados(names) {
    return names.reduce((acc, name) => {
        if (acc.findIndex((value) => value === name) >= 0) {
            //console.log(acc);
            return acc;
        } else {
            acc.push(name);
            // console.log(acc);
            return acc;
        }
    }, []);
}
arraySinDuplicados(names);
console.log(arraySinDuplicados(names));
