import {VDOM} from "./vdom.js";

export function createElement(tagName, attrs, ...children) {
    console.log('Children', children);
    return new VDOM(tagName, attrs, children);
}

export function mount(el, target) {
    target.appendChild(el);
}