import { listArray } from "./index";

function UpdateStatus(index) {
    const checkStatus = document.querySelectorAll('.checkbox');
            listArray[index].completed = checkStatus[index].checked;
}

export { UpdateStatus };
