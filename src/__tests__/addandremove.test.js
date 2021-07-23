/**
 * @jest-environment jsdom
 */

import {
  PopulateList,
} from '../liststructure.js';
import {
  AddList,
  RemoveTask,
  ClearList,
  EditTask,
} from '../addandremove.js';

jest.mock('../liststructure.js');

describe('addandremove.js', () => {
  describe('Addlist()', () => {
    test('AddList adds an object to the array of tasks', () => {
      const array = [];
      document.body.innerHTML = `<div>
        <input type="text" id="input" value="Task 1">
      </div>`;

      PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = {
        reload: jest.fn(),
      };

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
      window.location = {
        reload: jest.fn(),
      };

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
      window.location = {
        reload: jest.fn(),
      };

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
      window.location = {
        reload: jest.fn(),
      };

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
      window.location = {
        reload: jest.fn(),
      };

      AddList(array);

      expect(populateList).toHaveBeenCalled();
    });
  });

  describe('RemoveTask()', () => {
    test('Removes an object from the array of tasks', () => {
      const array = [{
        description: 'Task 1',
        completed: false,
        index: 0,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 0,
      },
      ];
      const index = 0;

      PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = {
        reload: jest.fn(),
      };

      RemoveTask(array, index);

      expect(array).toHaveLength(1);
    });

    test('Removes the correct object from the array of tasks', () => {
      const array = [{
        description: 'Task 1',
        completed: false,
        index: 0,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 0,
      },
      ];
      const index = 0;

      PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = {
        reload: jest.fn(),
      };

      RemoveTask(array, index);

      expect(array[0].description).not.toBe('Task 1');
    });

    test('Removes an object and leaves the correct object on the array of tasks', () => {
      const array = [{
        description: 'Task 1',
        completed: false,
        index: 0,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 0,
      },
      ];
      const index = 0;

      PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = {
        reload: jest.fn(),
      };

      RemoveTask(array, index);

      expect(array[0].description).toBe('Task 2');
    });

    test('Invokes the PopulateList function with array as argument', () => {
      const array = [{
        description: 'Task 1',
        completed: false,
        index: 0,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 0,
      },
      ];
      const index = 0;

      const populateList = PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = {
        reload: jest.fn(),
      };

      RemoveTask(array, index);

      expect(populateList).toHaveBeenLastCalledWith(array);
    });

    test('Invokes the PopulateList function with array as argument', () => {
      const array = [{
        description: 'Task 1',
        completed: false,
        index: 0,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 0,
      },
      ];
      const index = 0;

      const populateList = PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = {
        reload: jest.fn(),
      };

      RemoveTask(array, index);

      expect(populateList).not.toHaveBeenLastCalledWith();
    });
  });

  describe('EditTask()', () => {
    test('Updates the task description in the array', () => {
      // Arrange
      const array = [{
        description: 'Task 1',
        completed: false,
        index: 0,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 1,
      },
      ];
      const index = '1';

      document.body.innerHTML = `<div>
      <ul class="d-flex flex-column p-0" id="list-container">
        <li>Task Edited 1</li>
        <li>Task Edited 2</li>
        <li>Task Edited 3</li>
      </ul>
      </div>`;

      // Assert
      EditTask(array, index);

      expect(array[1].description).toBe('Task Edited 2');
    });
  });

  describe('ClearList()', () => {
    test('Delete tasks that are completed from the array', () => {
      // Arrange
      const array = [{
        description: 'Task 1',
        completed: false,
        index: 0,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 1,
      },
      {
        description: 'Task 3',
        completed: false,
        index: 2,
      },
      ];

      document.body.innerHTML = `<div>
        <ul class="d-flex flex-column p-0" id="list-container">
          <li><input class="checkbox" type="checkbox" checked>Task 1</li>
          <li><input class="checkbox" type="checkbox">Task 2</li>
          <li><input class="checkbox" type="checkbox" checked>Task 3</li>
        </ul>
        </div>`;

      PopulateList.mockImplementation(() => true);

      delete window.location;
      window.location = {
        reload: jest.fn(),
      };

      // Act
      ClearList(array);

      // Assert
      expect(array).toHaveLength(1);
    });
  });
});
