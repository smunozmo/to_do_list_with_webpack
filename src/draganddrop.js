/* eslint-disable import/no-cycle */
import { PopulateList } from './liststructure';
import listArray from './index';

function DragDropList() {
  const listDraggable = document.querySelectorAll('li');
  let startPos = 0;
  let currentPos = 0;
  listDraggable.forEach((e) => {
    e.addEventListener('dragstart', () => {
      e.classList.add('dragging');
      startPos = parseInt(e.id, 10);
    });
    e.addEventListener('dragleave', () => {
      e.classList.remove('over');
    });
    e.addEventListener('dragover', (i) => {
      i.preventDefault();
      currentPos = parseInt(e.id, 10);
      e.classList.add('over');
    });
    e.addEventListener('dragend', () => {
      e.classList.remove('dragging');

      if (startPos !== currentPos) {
        listArray[startPos].index = currentPos;
        listArray[currentPos].index = startPos;
      }
      PopulateList(listArray);
      window.location.reload();
    });
  });
}

export default DragDropList;