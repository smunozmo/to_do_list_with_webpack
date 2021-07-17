import { PopulateList } from './liststructure';

function AddList(array) {
    const input = document.querySelector('#input');
    const newDescription = input.value;
    const newTask = {
        description: newDescription,
        completed: false,
        index: array.length,
    }
    array.push(newTask);
    input.value = '';
    PopulateList(array);
    window.location.reload();
    
}

function RemoveTask(array, index) {
    array.splice(index, 1);

    for (let i = 0; i < array.length; i++) {
        array[i].index = i; 
    }
    PopulateList(array);
    window.location.reload();
}

export { AddList, RemoveTask };