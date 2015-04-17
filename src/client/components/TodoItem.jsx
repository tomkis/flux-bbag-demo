import React from 'react';
import ControllerView from './ControllerView.jsx';
import {todoToggled} from '../actions/TodoActions';

export default class TodoItem extends ControllerView {

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
    this.getActionCreator('todoActions').todoToggled(this.props.todoIndex);
  }
};
