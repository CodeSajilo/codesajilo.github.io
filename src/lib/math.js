import { log } from './helper.js';

export function add(a, b ) {
    log('add fn with', a, b);
    return a + b;
}

export function sub(a , b ) {
    return a -b;
}

export function multiply(a, b) {
    return a * b;
}