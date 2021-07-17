/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
import './style.css';
import _ from 'lodash';
import { PopulateDemo } from './liststructure';
import DragDropList from './draganddrop';
import UpdateStatus from './statusupdate';
import { AddList, RemoveTask } from './addandremove';

let listArray = [];
const addBtn = document.querySelector('#add');

// Local Storage get and load start

if (localStorage.getItem('LocalList') !== null) {
  listArray = JSON.parse(localStorage.getItem('LocalList'));
}

PopulateDemo(listArray);
DragDropList();

// Local Storage get and load start

const checkStatus = document.querySelectorAll('.checkbox');
const remove = document.querySelectorAll('#remove');

// Event Listeners start

checkStatus.forEach((e, index) => {
  e.addEventListener('change', () => {
    UpdateStatus(index, listArray);
  });
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    AddList(listArray);
  }
});

addBtn.addEventListener('click', () => {
  AddList(listArray);
  
});

remove.forEach((e, index) => {
    e.addEventListener('click', () => {
        console.log('esss');
        
        RemoveTask(listArray, index);
    })
})

// Event Listeners end

export default listArray;
