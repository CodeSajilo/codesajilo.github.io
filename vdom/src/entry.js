import { createElement, mount } from './util.js';

//const listItem1 = createElement('li', {'class': 'list-item'}, ['Item 1']);
//const listItem2 = createElement('li', {'class': 'list-item'}, ['Item 2']);
//const ulVdom = createElement('ul', {'class': 'myList', id: 'myList'}, [
//    listItem1,
//    listItem2
//]);
//
//const divVDom = createElement('div', {id: 'appRoot2'}, [
//    ulVdom
//]);
//
//mount(divVDom.render(), document.getElementById('appRoot'));

//let vdom = createElement('li', {class: 'list-item'}, ['Item 1']);
let vdom = <div id="appRoot2">
           <ul class="myList">
                <li class="list-item">Item 1 </li>
                <li class="list-item">Item 2</li>
           </ul>
</div>
mount(vdom.render(), document.getElementById('appRoot'));
