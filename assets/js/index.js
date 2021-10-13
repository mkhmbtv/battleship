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
        return row.map(col => {
            const gridItem = document.createElement('div');
            gridItem.setAttribute('data', col);
            gridItem.setAttribute('class', 'grid-item');
            gridContainer.appendChild(gridItem);
        });
    });
    
    gridDiv.appendChild(gridContainer);

    const play = event => {
        const square = event.target;
        const data = JSON.parse(square.getAttribute('data'));
        if (square.classList.contains('grid-item')) {
            if (data) {
                square.classList.add('hit');
                square.innerText = data;
                board.numRemaining--;
                if (board.isDone()) {
                    gridContainer.removeEventListener('click', play);
                    alert('Game over');
                }
            } else {
                square.classList.add('miss');
            }
        }
    }

    gridContainer.addEventListener('click', play);
    
    const resetButton = document.createElement('button');
    resetButton.innerText = 'Reset Game';
    document.body.insertBefore(resetButton, gridDiv);

    resetButton.addEventListener('click', event => {
        board = new Board();
        const newGrid = board.grid;
        const gridDivsArr = newGrid.map(row => {
            return row.map(col => {
                return `<div data=${col} class="grid-item"></div>`
            })
        });

        const gridDivsString = gridDivsArr.map(row => row.join(' ')).join(' ');
        gridContainer.innerHTML = gridDivsString;
        gridContainer.addEventListener('click', play);
    })
};