import './styles.css';
import {newRandom} from './js/componentes';
import { limpiar } from './js/componentes';

const botonUno = document.querySelector('#btn-uno');
const botonDos = document.querySelector('#btn-dos');


botonUno.addEventListener( 'click', ()=>{
    
    newRandom();
    botonUno.disabled=true;

});

botonDos.addEventListener( 'click', ()=>{

limpiar();
botonUno.disabled=false;

});


