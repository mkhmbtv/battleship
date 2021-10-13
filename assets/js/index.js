// Imports
import Board from './board.js';

let board = new Board();

window.onload = () => {
    const grid = board.grid;
    console.log(grid);

    const gridDiv = document.createElement('div');
    gridDiv.setAttribute('class', 'grid');
    document.body.appendChild(gridDiv);

    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'grid-container');
    grid.map(row => {
        return row.map(cell => {
            const gridItem = document.createElement('div');
            gridItem.setAttribute('data', cell);
            gridItem.setAttribute('class', 'grid-item');
            gridContainer.appendChild(gridItem);
        });
    });
    gridDiv.appendChild(gridContainer);
    
};