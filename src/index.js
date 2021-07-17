/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
import './style.css';
import _ from 'lodash';
import { PopulateDemo } from './liststructure';
import DragDropList from './draganddrop';
import UpdateStatus from './statusupdate';

let listArray = [];

if (localStorage.getItem('LocalList') !== null) {
  listArray = JSON.parse(localStorage.getItem('LocalList'));
}

PopulateDemo(listArray);
DragDropList();

const checkStatus = document.querySelectorAll('.checkbox');

checkStatus.forEach((e, index) => {
  e.addEventListener('change', () => {
    UpdateStatus(index, listArray);
  });
});

export default listArray;
