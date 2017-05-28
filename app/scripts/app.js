import styles from '../styles/app.css';
import { sayHello } from './data';


const element = document.createElement('h1');

element.innerHTML = sayHello('World');

// document.body.appendChild(element);
console.log(element);
