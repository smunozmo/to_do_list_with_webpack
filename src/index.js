/* eslint-disable no-unused-vars */
import './style.css';
import _ from 'lodash';
import { PopulateDemo } from './liststructure';
import { UpdateStatus } from './statusupdate';
import { DragDropList } from './draganddrop';

let listArray = [];

if (localStorage.getItem('LocalList') !== null) {
  listArray = JSON.parse(localStorage.getItem('LocalList'))
}

PopulateDemo(listArray);
DragDropList();

let checkStatus = document.querySelectorAll('.checkbox');

checkStatus.forEach((e, index) => {
  e.addEventListener('change', () => {
    
      UpdateStatus(index, listArray);
  })
})

export { listArray };
