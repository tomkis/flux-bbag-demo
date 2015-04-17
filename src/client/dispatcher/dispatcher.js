import {Dispatcher} from 'flux';

export default class CustomDispatcher extends Dispatcher {

  dispatch(action) {
    console.log(action.type, action.payload);
    super.dispatch(action);
  }
};
