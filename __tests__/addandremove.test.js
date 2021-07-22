/**
 * @jest-environment jsdom
 */

import { PopulateList } from '../src/liststructure.js';
import { AddList, RemoveTask } from '../src/addandremove.js';

jest.mock('../src/liststructure.js');

describe('addandremove.js', () => {
  describe('Addlist()', () => {
    test('AddList adds an object to the array of tasks', () => {
      const array = [];
      document.body.innerHTML = `<div>
        <input type="text" id="input" value="Task 1">
      </div>`;

      PopulateList.mockImplementation(() => true);

      const { location } = window;
      delete window.location;
      window.location = { reload: jest.fn() };

      AddList(array);

      expect(array).toHaveLength(1);
    });

    test('AddList adds a task with the correct description to the array', () => {
      const array = [];
      document.body.innerHTML = `<div>
        <input type="text" id="input" value="Task 1">
      </div>`;

      PopulateList.mockImplementation(() => true);

      const { location } = window;
      delete window.location;
      window.location = { reload: jest.fn() };

      AddList(array);

      expect(array[0].description).toBe('Task 1');
    });

    test('AddList adds a task with the correct description to the array', () => {
      const array = [];
      document.body.innerHTML = `<div>
        <input type="text" id="input" value="Task 1">
      </div>`;

      PopulateList.mockImplementation(() => true);

      const { location } = window;
      delete window.location;
      window.location = { reload: jest.fn() };

      AddList(array);

      expect(array[0].description).not.toBe('Task 2');
    });

    test('AddList adds a task with an empty value when the input has no value', () => {
      const array = [];
      document.body.innerHTML = `<div>
        <input type="text" id="input" value="">
      </div>`;

      PopulateList.mockImplementation(() => true);

      const { location } = window;
      delete window.location;
      window.location = { reload: jest.fn() };

      AddList(array);

      expect(array[0].description).toBe('');
    });
  });
});
