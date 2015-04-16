import {dispatcher} from '../dispatcher/dispatcher';
import {TODOS_LOADED, TODO_TOGGLED} from '../constants/ActionTypes';
import mock from '../api/ApiMock';

function dispatch(type, payload) {
  dispatcher.dispatch({
    type: type,
    payload: payload
  });
};

export function todosLoaded(todos) {
  dispatch(TODOS_LOADED, todos);
};

export function todoToggled(todoIndex) {
  dispatch(TODO_TOGGLED, todoIndex);
};
