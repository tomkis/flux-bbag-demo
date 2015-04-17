import React from 'react';
import {Map} from 'immutable';
import CustomDispatcher from './dispatcher/dispatcher';
import TodoList from './components/TodoList.jsx';
import TodoListStore from './stores/TodoListStore';
import TodoActions from './actions/TodoActions';

const dispatcher = new CustomDispatcher();
const stores = Map({
  todoListStore: new TodoListStore(dispatcher)
});
const actionCreators = Map({
  todoActions: new TodoActions(dispatcher)
});

React.render(<TodoList stores={stores} actionCreators={actionCreators} />, document.getElementById('app'));
