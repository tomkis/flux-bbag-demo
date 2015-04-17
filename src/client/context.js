import TodoListStore from './stores/TodoListStore';
import CustomDispatcher from './dispatcher/Dispatcher';

export const dispatcher = new CustomDispatcher();
export const todoListStore = new TodoListStore();
