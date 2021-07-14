/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const listContainer = document.getElementById('list-container');
const listArray = [];
const hardCodeObj1 = {
  description: 'New task 1',
  completed: false,
  index: 1,
};
const hardCodeObj2 = {
  description: 'New task 2',
  completed: false,
  index: 2,
};
const hardCodeObj3 = {
  description: 'New task 3',
  completed: false,
  index: 3,
};

listArray.push(hardCodeObj1);
listArray.push(hardCodeObj2);
listArray.push(hardCodeObj3);

for (let index = 0; index < listArray.length; index += 1) {
  listContainer.innerHTML += `
    <li id="list-item">
    <div class="form-check p-0 mt-1"> <label class="form-check-label"> <input class="checkbox" type="checkbox"> ${listArray[index].description} <i class="input-helper"></i></label><i class="float-end fas fa-ellipsis-v"></i></div>
    </li>
    `;
}
