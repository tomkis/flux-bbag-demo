import {dispatcher} from '../dispatcher/dispatcher';
import mock from '../api/ApiMock';

function dispatch(type, payload) {
  dispatcher.dispatch({
    type: type,
    payload: payload
  });
};

export function addTodo(todo) {
  dispatch('TODO_ADD', todo);
};

export function loadTodos(todos) {
  dispatch('TODOS_LOADED', todos);
};

export function toggleTodo(todoIndex) {
  dispatch('TODO_TOGGLE', todoIndex);
};
