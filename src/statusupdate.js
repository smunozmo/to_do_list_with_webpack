import { StoreList } from './liststructure';

function UpdateStatus(index, array) {
  const checkStatus = document.querySelectorAll('.checkbox');

  array[index].completed = checkStatus[index].checked;
  StoreList(array);
}

export default UpdateStatus;
