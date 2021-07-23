/**
 * @jest-environment jsdom
 */
import { PopulateList } from '../liststructure';
import { DragEndHandler } from '../draganddrop';

jest.mock('../liststructure.js');

describe('DragDropList()', () => {
  test('Update index value of a task upon dragend', () => {

    const listArray = [{
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
      }
    ];

    let startPos = 0;
    let currentPos = 1;

    const index = 0;

    PopulateList.mockImplementation(() => true);

    delete window.location;
      window.location = {
        reload: jest.fn()
      };

    const li = document.createElement('li');
    document.body.appendChild(li);

    DragEndHandler(li, startPos, currentPos, listArray);

    expect(listArray[0].description).toBe('Task 2');
  });

});
