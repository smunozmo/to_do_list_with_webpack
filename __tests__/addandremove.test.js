/**
 * @jest-environment jsdom
 */

jest.mock('../src/liststructure.js');
import { PopulateList } from '../src/liststructure.js';
import { AddList, RemoveTask } from "../src/addandremove.js";

describe('addandremove.js', () => {
  describe('Addlist()', () => {
    test('AddList adds an object to the array of tasks', () => {
      let array = [];
      document.body.innerHTML =
      `<div>
        <input type="text" id="input" value="Task 1">
      </div>`;

      PopulateList.mockImplementation(() => {
        return true;
      });

      const { location } = window;
      delete window.location;
      window.location = { reload: jest.fn() };

      AddList(array);

      expect(array).toHaveLength(1);
    });


  })
})
