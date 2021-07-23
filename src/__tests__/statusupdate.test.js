/**
 * @jest-environment jsdom
 */

import UpdateStatus from '../statusupdate';
import { StoreList } from '../liststructure';

jest.mock('../liststructure.js');

describe('UpdateStatus()', () => {
  test('Update task\'s completed status when checkbox is checked', () => {
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
      <li><input class="checkbox" type="checkbox" checked>Task Edited 1</li>
      <li><input class="checkbox" type="checkbox">Task Edited 2</li>
      <li><input class="checkbox" type="checkbox" checked>Task Edited 3</li>
    </ul>
    </div>`;

    const index = 0;

    StoreList.mockImplementation(() => true);

    UpdateStatus(index, array);

    expect(array[0].completed).toBeTruthy();
  });
});
