import "./style.css";

/* eslint-disable no-unused-vars */
import _ from "lodash";

import { PopulateDemo } from "./liststructure.js";

let listArray = [];
let checkStatus = document.querySelectorAll('.checkbox');

PopulateDemo();

checkStatus.forEach((e, index) => {
  e.addEventListener('change', () => {
      UpdateStatus(index);
  })
})

export { listArray };
