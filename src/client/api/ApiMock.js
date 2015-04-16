import {fromJS} from 'immutable';

const MOCK_RESPONSE_TIME = 1000;

export default function mockTodoList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fromJS([{
        todo: 'Todo 1',
        completed: false
      },{
        todo: 'Todo 2',
        completed: true
      },{
        todo: 'Todo 3',
        completed: true
      }]));
    }, MOCK_RESPONSE_TIME);
  });
};
