'use strict';

async function getPersonajes() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/episode');
        const data = await response.json();

        const capitulos = data.results;
        //filtrar capitulos Enero
        const capitulosEnero = capitulos.filter((capitulo) => {
            return capitulo.air_date.includes('January');
        });

        //construir array que contenga todos los personajes capis Enero
        const januaryCharacters = capitulosEnero.reduce((acc, capitulo) => {
            acc = acc.concat(capitulo.characters);
            return acc;
        }, []);
        console.log(januaryCharacters);

        //recuperar nombre de cada personaje
        const januaryCharactersNames = januaryCharacters.map((characterUrl) => {
            return getCharacterName(characterUrl);
        });
        return januaryCharactersNames;
    } catch (err) {
        console.log(err);
    }
}
console.log(getPersonajes());

const getCharacterName = async (characterURL) => {
    try {
        const response = await fetch(characterURL);
        const data = await response.json();
        return data.name;
    } catch (err) {
        console.log(err);
    }
};

console.log(getCharacterName('https://rickandmortyapi.com/api/character/1'));
