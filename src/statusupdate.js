import {StoreList} from './liststructure';

function UpdateStatus(index, array) {
    const checkStatus = document.querySelectorAll('.checkbox');
            console.log(array);
            
            array[index].completed = checkStatus[index].checked;
            StoreList(array)
}

export { UpdateStatus };
