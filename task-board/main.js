import { Board } from './board/index.js';
const board = new Board();

const root = document.querySelector('.root');
root.appendChild(board.node);
