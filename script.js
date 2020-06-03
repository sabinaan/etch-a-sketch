const container = document.querySelector('div.container');

function makeGrid(row,colu){
    container.style.setProperty('--grid-rows',row);
    container.style.setProperty('--grid-columns',colu);
    
    for (i= 0; i < (row * colu); i++){
        let newBox = document.createElement('div');
        newBox.classList.add('grid-box');
        container.appendChild(newBox);
    }
}

makeGrid(16,16);