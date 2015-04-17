# Flux implementation overview
  - Component is just function of state/props, it listens on store's change event (TodoList.jsx)
    - Reusable leafs of the tree don't need to be implemented Flux way -> TextField, ComboBox etc. (ideally you can install them via npm)
  - Action is just pair of name and payload
  - Action creator is responsible for dispatching action to dispatcher
  - Constants, use ES6 symbols (Clojure keywords) thx matt, never use strings because of possible "silent typos"
  - Flux is just architecture for building application logic not service layer (ApiService)
  - Store holds state and encapsulates application logic, should be synchronous (grep for new)
  - Dispatcher dispatches actions to corresponding stores, waitFor method helps resolving dependencies (logging)
  - You don't need 2-w data binding, in fact 2-w data binding breaks unidirectional data flow (TodoItem -> onChange)

# My Flux recommendations
  - Separate application logic and service layer, actions & stores are synchronous for ease of testing
  - You can't call action in action! These are cascading updates (you are doing probably something wrong -> next point)
  - Action naming should always reflect what actually happened rather than expose implementation detail
    - TODO_ITEM_TOGGLED is better than TODO_ITEM_CHANGE_STATE (spot the past tense)
    - TODO_ITEM_ADDED -> action is fire&forget therefore there is no clear way how to find out if the action failed or not (optimistic async API vs blocking API call)
    - Application logic should be in stores and nowhere else
  - Forget about react-router, routing is application logic and therefore should be in store
  - Don't use React context (which is very similar to angular's scope actually)
  - Store dependencies:
    - Bottleneck in Flux
    - Have multiple stores, listen to single action on multiple stores, duplicate data and use waitFor to sync them together (if necessary)
    - Use brain when you are designing your stores :-)
      - DDD Eric Evans
      - Bounded Context
