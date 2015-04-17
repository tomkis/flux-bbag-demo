import mockTodoList from './ApiMock';

export async function loadTodosFromApi(todoActions) {
  todoActions.todosLoaded(await mockTodoList());
};
