import mockTodoList from './ApiMock';
import {todosLoaded} from '../actions/TodoActions';

export async function loadTodosFromApi() {
  todosLoaded(await mockTodoList());
};
