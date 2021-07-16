import { listArray } from './index';
import { PopulateList } from './liststructure';

function DragDropList() {
    const listDraggable = document.querySelectorAll('li');
    let startPos, currentPos = 0;
    listDraggable.forEach((e) => {
        e.addEventListener('dragstart', (i) => {
            e.classList.add('dragging');
            startPos = parseInt(e.id, 10);  
        })
        e.addEventListener('dragleave', (i) => {
            e.classList.remove('over');
        })
        e.addEventListener('dragover', (i) => {
            i.preventDefault();
            currentPos = parseInt(e.id, 10);
            e.classList.add('over');       
        })
        e.addEventListener('dragend', (i) => {
            e.classList.remove('dragging');
            
            if (startPos !== currentPos) {
                listArray[startPos].index = currentPos;
                listArray[currentPos].index = startPos;
            }
            PopulateList(listArray) 
            location.reload();
        })
    })
    
}

export { DragDropList }