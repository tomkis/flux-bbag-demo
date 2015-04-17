import React from 'react';
import ControllerView from './ControllerView.jsx';
import {loadTodosFromApi} from '../api/ApiService';
import TodoItem from './TodoItem.jsx';

export default class TodoList extends ControllerView {

  constructor(props, context) {
    super(props, context);

    this.state = {
      todos: this.getStore('todoListStore').todos
    };
  }

  componentWillMount() {
    this.getStore('todoListStore').addChangeListener(this.onChange.bind(this));
  }

  componentDidMount() {
    loadTodosFromApi(this.getActionCreator('todoActions'));
  }

  render() {
    return (
      <ul>
        {this.state.todos.map((todo, index) => {
          return <TodoItem todo={todo} todoIndex={index} key={index} />;
        }).toArray()}
      </ul>
    )
  }

  onChange() {
    this.setState({
      todos: this.getStore('todoListStore').todos
    });
  }
};
