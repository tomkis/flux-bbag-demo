import {Dispatcher} from 'flux';

class CustomDispatcher extends Dispatcher {

  dispatch(action) {
    console.log(action.type, action.payload);
    super.dispatch(action);
  }
};

export const dispatcher = new CustomDispatcher();
