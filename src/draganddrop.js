/* eslint-disable import/no-cycle */
import { PopulateList } from './liststructure';

function DragEndHandler(e, startPos, currentPos, array) {
  e.classList.remove('dragging');

  if (startPos !== currentPos) {
    array[startPos].index = currentPos;
    array[currentPos].index = startPos;
  }
  array.sort((a, b) => a.index - b.index);
  PopulateList(array);
  window.location.reload();
}

function DragDropList(array) {
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
    e.addEventListener('dragend', () => DragEndHandler(e, startPos, currentPos, array));
  });
}

export { DragDropList, DragEndHandler };
