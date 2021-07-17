const listContainer = document.getElementById('list-container');

function StoreList(arr) {
  localStorage.setItem('LocalList', JSON.stringify(arr));
}

function PopulateList(array) {
  listContainer.innerHTML = '';
  array.sort((a, b) => a.index - b.index);
  for (let index = 0; index < array.length; index += 1) {
    listContainer.innerHTML += `
      <li id="${index}" draggable="true">
      <div class="form-check p-0 mt-1 user" contenteditable="false"> <label class="form-check-label"> <input class="checkbox me-2" type="checkbox" id="check${index}">${array[index].description} <i class="input-helper"></i></label><i class="float-end fas fa-ellipsis-v"></i><i class="float-end me-2 far fa-trash-alt" id="remove"></i></div>
      </li>
      `;
    const completed = `${array[index].completed}`;
    const currentLi = document.getElementById(`check${index}`);

    if (completed === 'true') {
      currentLi.setAttribute('checked', '');
    } else {
      currentLi.removeAttribute('checked');
    }
  }

  StoreList(array);
}

function PopulateDemo(array) {
  const hardCodeObj1 = {
    description: 'New task 1',
    completed: false,
    index: 0,
  };
  const hardCodeObj2 = {
    description: 'New task 2',
    completed: false,
    index: 1,
  };
  const hardCodeObj3 = {
    description: 'New task 3',
    completed: false,
    index: 2,
  };

  if (localStorage.getItem('LocalList') == null) {
    array.push(hardCodeObj1);
    array.push(hardCodeObj2);
    array.push(hardCodeObj3);
  }

  PopulateList(array);
}

export { PopulateDemo, PopulateList, StoreList };
