import { PopulateList } from './liststructure';

function AddList(array) {
  const input = document.querySelector('#input');
  const newDescription = input.value;
  const newTask = {
    description: newDescription,
    completed: false,
    index: array.length,
  };
  array.push(newTask);
  input.value = '';
  PopulateList(array);
  window.location.reload();
}

function RemoveTask(array, index) {
  array.splice(index, 1);

  for (let i = 0; i < array.length; i += 1) {
    array[i].index = i;
  }
  PopulateList(array);
  window.location.reload();
}

function ClearList(array) {
  const checkStatus = document.querySelectorAll('.checkbox');
  console.log(checkStatus);

  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (checkStatus[i].checked) {
      array.splice(i, 1);
    }
  }

  for (let i = 0; i < array.length; i += 1) {
    array[i].index = i;
  }

  PopulateList(array);
  window.location.reload();
}

function EditTask(array, index) {
  const listDraggable = document.querySelectorAll('li');
  array[index].description = listDraggable[index].innerText;
}

export {
  AddList, RemoveTask, ClearList, EditTask,
};