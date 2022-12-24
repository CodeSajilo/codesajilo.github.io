const createCard = Symbol('createCard');
const addStyle = Symbol('addStyle');
const el = Symbol('el');
const handleDragStart = Symbol('handleDragStart');
const handleDragEnd = Symbol('handleDragEnd');
let cardId = 1;
export class Card {
    constructor(title) {
        this[el] = this[createCard](title);
    }

    [createCard](title) {
        const node = document.createElement('div');
        node.className = 'card';
        node.innerText = title;
        node.appendChild(this[addStyle]());
        node.id = 'card-' + cardId;
        node.addEventListener('dragstart', e => this[handleDragStart](e));
        node.addEventListener('dragend', e => this[handleDragEnd](e));
        cardId++;
        return node;
    }

    [addStyle]() {
        const style = document.createElement('style');
        style.innerText = `
            .card {
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                height: 50px;
                padding: 10px;
                margin-top: 5px;
                margin-bottom: 5px;
                background: white;
                font-size: 16px;
            }
            
            .card:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }

            .card.todo {
                background: #ffecec;
            }
            .card.inprogress {
                background:#f7ecff;
            }
            .card.completed {
                background: #f9ffec;
            }

            .card.drag-start {
                opacity: .4;
            }
        `;
        return style;
    }

    [handleDragStart](e){
        this.addCssClass('drag-start');
        e.dataTransfer.setData('text', this[el].id);
        console.log('handleDragStart event:::', e);
    }

    [handleDragEnd](e){
        this.removeCssClass('drag-start');
        console.log('handleDragEnd event:::', e);
    }

    get node(){
        return this[el];
    }

    addCssClass(className) {
        this[el].classList.add(className);
    }

    removeCssClass(className) {
        this[el].classList.remove(className);
    }

    setDraggable() {
        this[el].setAttribute('draggable', true);
    }

    resetDraggable() {
        this[el].removeAttribute('draggable');
    }

    
}