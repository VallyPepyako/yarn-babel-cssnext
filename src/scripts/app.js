import styles from '../css/app.css';
import { sayHello } from './data';


const element = document.createElement('h1');

element.innerHTML = sayHello('World');

document.body.appendChild(element);
