import { add, sub } from './lib/math.js';
import  './styles/a.css';
//import './test.jcs';

const op = {add, sub};
const res = document.getElementById('res');
const a = document.getElementById('first');
const b = document.getElementById('second');
document.querySelectorAll('button')
    .forEach(button => button.addEventListener('click', () => {
        res.innerText = op[button.id](parseInt(a.value), parseInt(b.value));
        a.value = '';
        b.value = '';
    }));

console.log('Index.js');
