/**
 * @jest-environment jsdom
 */

import { AddList, RemoveTask } from "../src/addandremove.js";

describe('addandremove.js', () => {
  describe('Addlist()', () => {
    test('AddList adds an object to the array of tasks', () => {
      let array = [];
      document.body.innerHTML =
      `<div>
        <input type="text" id="#input" value="Task 1">
      </div>`;

      AddList(array);

      expect(array).toHaveLength(1);
    });


  })
})
