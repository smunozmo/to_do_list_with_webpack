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

      delete window.location;
      window.location = { reload: jest.fn() };

      AddList(array);

      expect(array).toHaveLength(1);
    });

    test('Adds a task with the correct description to the array', () => {
      const array = [];
      document.body.innerHTML = `<div>
        <input type="text" id="input" value="Task 1">
      </div>`;

      PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = { reload: jest.fn() };

      AddList(array);

      expect(array[0].description).toBe('Task 1');
    });

    test('Does not add another task description to the array', () => {
      const array = [];
      document.body.innerHTML = `<div>
        <input type="text" id="input" value="Task 1">
      </div>`;

      PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = { reload: jest.fn() };

      AddList(array);

      expect(array[0].description).not.toBe('Task 2');
    });

    test('Adds a task with an empty value when the input has no value', () => {
      const array = [];
      document.body.innerHTML = `<div>
        <input type="text" id="input" value="">
      </div>`;

      PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = { reload: jest.fn() };

      AddList(array);

      expect(array[0].description).toBe('');
    });

    test('Invokes the PopulateList function with array as argument', () => {
      const array = [];
      document.body.innerHTML = `<div>
        <input type="text" id="input" value="">
        </div>`;

      const populateList = PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = { reload: jest.fn() };

      AddList(array);

      expect(populateList).toHaveBeenCalled();
    });
  });

  describe('RemoveTask()', () => {
    test('Removes an object from the array of tasks', () => {
      const array = [
        {
          description: 'Task 1',
          completed: false,
          index: 0,
        },
        {
          description: 'Task 2',
          completed: false,
          index: 0,
        }];
      const index = 0;

      PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = { reload: jest.fn() };

      RemoveTask(array, index);

      expect(array).toHaveLength(1);
    });

    test('Removes the correct object from the array of tasks', () => {
      const array = [
        {
          description: 'Task 1',
          completed: false,
          index: 0,
        },
        {
          description: 'Task 2',
          completed: false,
          index: 0,
        }];
      const index = 0;

      PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = { reload: jest.fn() };

      RemoveTask(array, index);

      expect(array[0].description).not.toBe('Task 1');
    });

    test('Removes an object and leaves the correct object on the array of tasks', () => {
      const array = [
        {
          description: 'Task 1',
          completed: false,
          index: 0,
        },
        {
          description: 'Task 2',
          completed: false,
          index: 0,
        }];
      const index = 0;

      PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = { reload: jest.fn() };

      RemoveTask(array, index);

      expect(array[0].description).toBe('Task 2');
    });

    test('Invokes the PopulateList function with array as argument', () => {
      const array = [
        {
          description: 'Task 1',
          completed: false,
          index: 0,
        },
        {
          description: 'Task 2',
          completed: false,
          index: 0,
        }];
      const index = 0;

      const populateList = PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = { reload: jest.fn() };

      RemoveTask(array, index);

      expect(populateList).toHaveBeenLastCalledWith(array);
    });

    test('Invokes the PopulateList function with array as argument', () => {
      const array = [
        {
          description: 'Task 1',
          completed: false,
          index: 0,
        },
        {
          description: 'Task 2',
          completed: false,
          index: 0,
        }];
      const index = 0;

      const populateList = PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = { reload: jest.fn() };

      RemoveTask(array, index);

      expect(populateList).not.toHaveBeenLastCalledWith();
    });
  });
});
