import '../css/componentes.css';

let   numeros     = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0],
      letras      = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'],
      letrasMayus = letras.map(( elemento ) => { return elemento.toUpperCase() });
const insert      = document.querySelector('#pass'); 





export const newRandom = ( )=>{

let mezcla = numeros.concat(letras,letrasMayus);

let shuffle = mezcla.reduce((a,v)=>a.splice(Math.floor(Math.random() * a.length), 0, v) && a, []);

let newPass = shuffle.slice(5,15);

let passwordNuevo=newPass.join('');

insert.innerText=passwordNuevo;

};

export const limpiar = ( ) => {

insert.innerText='----------';

};