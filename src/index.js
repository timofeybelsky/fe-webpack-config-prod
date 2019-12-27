import styles from './assets/sass/style.scss';

const greeting = document.createElement( 'h1' );

greeting.innerText = 'My Man!';

greeting.classList.add( styles.test );

document.body.appendChild( greeting );
