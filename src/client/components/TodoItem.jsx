import React from 'react';
import {toggleTodo} from '../actions/TodoActions';

export default class TodoItem extends React.Component {

  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.get('completed')}
          onChange={this.onToggleTodoItem.bind(this)} />

        <span>{this.props.todo.get('todo')}</span>
      </li>
    );
  }

  onToggleTodoItem() {
    toggleTodo(this.props.todoIndex);
  }
};
