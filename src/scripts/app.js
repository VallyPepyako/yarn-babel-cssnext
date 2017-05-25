import { sayHello } from './data';

const element = document.createElement('h1');

element.innerHTML = sayHello('World');

document.body.appendChild(element);