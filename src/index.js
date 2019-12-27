import styles from './assets/sass/style.scss';
import _      from 'lodash';

console.log( _.uniq( [2, 1, 2] ) );

const greeting = document.createElement( 'h1' );

greeting.innerText = 'My Man!';

greeting.classList.add( styles.test );

document.body.appendChild( greeting );
