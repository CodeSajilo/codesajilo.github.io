import { Card } from "../card/index.js";
const handleDragStart = Symbol('handleDragStart');
 const createSection = Symbol('createSection');
 const addStyle = Symbol('addStyle');
 const handleClick = Symbol('addStyle');
 const registerClickListener = Symbol('registerClickListener');
 const board = Symbol('board');
 const addCard = Symbol('addCard');
 const enableDropTarget = Symbol('enableDropTarget');
 export class Board {
    constructor() {
        const div = document.createElement('div');
        div.innerHTML = `
            ${this[addStyle]()}
            <div class="board-container">
                ${this[createSection]('Todo')}
                ${this[createSection]('In Progress')}
                ${this[createSection]('Completed')}
            </div>
        `;
        this[registerClickListener](div);
        this[board] = div;
        setTimeout(() => {
            this[enableDropTarget]('.card-container'), 1000
        });

    }

    [createSection](title) {
        let _title = title.toLowerCase().replaceAll(' ', '');
        let container = `
        <div class="board ${_title}">
            <section class="board-header ${_title}">
                <h2>${title}</h2>
                <button data-for="${_title}">+</button>
            </section>
            <div class="card-container ${_title}"></div>
        </div>
        `;
        return container;
    
    }

    [addStyle]() {
        return `<style>
            .board-container {
                display: flex;
                justify-content: space-between;
                min-height: 400px;
                width: 100%;
                background: #fbfbfb;
                gap: 2%;
            }
            .board {
                padding: 5px;
                flex: 30%;
                background: #f4f4f4;
            }
            .board:last-child {
                border-right: 0;
            }

            .board-header {
                display: flex;
                flex-direction: column;
            }

            .board-header > button {
                font-size: 20px;
                color: white;
                background: green;
                border: 0;
                outline: 0;
                height: 40px;
            }

            .card-container {
                min-height: 100px;
            }
            
            </style>`;
    }

    [registerClickListener](node) {
        node.querySelectorAll('button[data-for]')
            .forEach(button => button.addEventListener('click', e => this[handleClick](e)));
    }
    [handleClick](e) {
        const button = e.target;
        const boardType = button.getAttribute('data-for');
        const cardContainer = this[board].querySelector('.card-container.' + boardType);
        this[addCard](cardContainer);
    }

    [addCard](container) {
        const card = new Card('Hello Test');
        card.setDraggable();
        card.addCssClass(container.classList[1]);
        container.appendChild(card.node);
    }

    [enableDropTarget](selector) {
        const cardContainers = document.querySelectorAll(selector);
        cardContainers.forEach(c => c.addEventListener('dragover', e => {
            e.preventDefault();
        }));

        cardContainers.forEach(c => c.addEventListener('drop', e => {
            e.preventDefault();
            let cardId = e.dataTransfer.getData('text');
            const cardBeingDropped = document.getElementById(cardId);
            c.appendChild(cardBeingDropped);
        }));
    }

    get node() {
        return this[board];
    }
}