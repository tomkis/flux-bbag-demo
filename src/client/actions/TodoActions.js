import {TODOS_LOADED, TODO_TOGGLED} from '../constants/ActionTypes';
import mock from '../api/ApiMock';

export default class TodoActions {

  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  dispatch(type, payload) {
    this.dispatcher.dispatch({
      type: type,
      payload: payload
    });
  }

  todosLoaded(todos) {
    this.dispatch(TODOS_LOADED, todos);
  }

  todoToggled(todoIndex) {
    this.dispatch(TODO_TOGGLED, todoIndex);
  }
}
