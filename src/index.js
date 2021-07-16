/* eslint-disable no-unused-vars */
import './style.css';
import _ from 'lodash';
import { PopulateDemo } from './liststructure.js';
import { UpdateStatus } from './statusupdate.js';

let listArray = [];

if (localStorage.getItem('LocalList') !== null) {
  listArray = JSON.parse(localStorage.getItem('LocalList'))
}

PopulateDemo(listArray);

let checkStatus = document.querySelectorAll('.checkbox');

checkStatus.forEach((e, index) => {
  e.addEventListener('change', () => {
    console.log('yes y el array es ' + listArray);
    
      UpdateStatus(index, listArray);
  })
})

export { listArray };
