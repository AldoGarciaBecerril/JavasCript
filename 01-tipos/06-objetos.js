//Personaje de TV//

let anime = 'Naruto';
let nombre = 'Naruto Uzumaki';
let edad = 16;

let personaje = {
    anime: 'Naruto',
    nombre: 'Naruto Uzumaki',
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['edad']);

personaje.nombre = 'Konohamaru Zarutobi';
personaje['edad'] = '8';

console.log(personaje);

delete personaje.anime;

console.log(personaje);


