const container = document.querySelector('div.container');
makeGrid(16,16);

function makeGrid(row,colu){
    container.style.setProperty('--grid-rows',row);
    container.style.setProperty('--grid-columns',colu);

    for (i= 0; i < (row * colu); i++){
        let newBox = document.createElement('div');
        newBox.classList.add('grid-box');
        container.appendChild(newBox);
    }

    const gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach((box) => {
        box.addEventListener('mouseover', (e) => {
            e.target.classList.add('color-change')
        });
    });
}

function removeGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    
    let userInput = prompt('How many squares per side do you want the new grid to be?');
    if (userInput < 101){
        removeGrid();
        makeGrid(userInput,userInput);;
    } else {
        alert('That number is to high. Try again.')
    }
        
    
});

