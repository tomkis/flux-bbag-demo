import React from 'react';
import {loadTodosFromApi} from '../api/ApiService';
import {todoListStore} from '../context';
import TodoItem from './TodoItem.jsx';

export default class TodoList extends React.Component {

  constructor() {
    super();

    this.state = {
      todos: todoListStore.todos
    };
  }

  componentWillMount() {
    todoListStore.addChangeListener(this.onChange.bind(this));
  }

  componentDidMount() {
    loadTodosFromApi();
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
      todos: todoListStore.todos
    });
  }
};
