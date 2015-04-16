import mockTodoList from './ApiMock';
import {loadTodos} from '../actions/TodoActions';

export async function loadTodosFromApi() {
  loadTodos(await mockTodoList());
};
