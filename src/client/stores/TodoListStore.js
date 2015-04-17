import {EventEmitter2} from 'eventemitter2';
import {List} from 'immutable';
import {dispatcher} from '../context';
import {TODOS_LOADED, TODO_TOGGLED} from '../constants/ActionTypes';
const CHANGE_EVENT = 'change';

export default class TodoListStore {

  constructor() {
    this.emitter = new EventEmitter2();
    this.todos = List.of();

    this.dispatchToken = dispatcher.register((action) => {
      switch (action.type) {
        case TODOS_LOADED:
          this.onTodosLoaded(action.payload);
          break;
        case TODO_TOGGLED:
          this.onTodoToggled(action.payload);
          break;
      }
    });
  }

  addChangeListener(listener) {
    this.emitter.addListener(CHANGE_EVENT, listener);
  }

  emitChange() {
    this.emitter.emit(CHANGE_EVENT);
  }

  onTodosLoaded(todos) {
    this.todos = todos;
    this.emitChange();
  }

  onTodoToggled(todoIndex) {
    const completed = this
      .todos
      .get(todoIndex)
      .get('completed');

    this.todos = this.todos.set(todoIndex,
      this
        .todos
        .get(todoIndex)
        .set('completed', !completed));

    this.emitChange();
  }
};
