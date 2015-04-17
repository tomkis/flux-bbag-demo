import React from 'react';

export default class ControllerView extends React.Component {

  getChildContext() {
    return {
      stores: this.props.stores || this.context.stores,
      actionCreators: this.props.actionCreators || this.context.actionCreators
    };
  }

  getStore(name) {
    var stores = this.props.stores || this.context.stores;

    if (stores.has(name)) {
      return stores.get(name);
    } else {
      throw new Error(`Store ${name} is not registered`);
    }
  }

  getActionCreator(name) {
    var actionCreators = this.props.actionCreators || this.context.actionCreators;

    if (actionCreators.has(name)) {
      return actionCreators.get(name);
    } else {
      throw new Error(`Action creator ${name} is not registered`);
    }
  }
};

const contextTypes = {
  stores: React.PropTypes.object,
  actionCreators: React.PropTypes.object
};

ControllerView.contextTypes = contextTypes;
ControllerView.childContextTypes = contextTypes;
