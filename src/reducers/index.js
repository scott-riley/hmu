import { createStore, combineReducers } from 'redux';
import UserReducer from './reducer_user';
// import ActiveMessageReducer from './reducer_active_message';
// import MessagesReducer from './reducer_messages';
import { reducer as formReducer } from 'redux-form';

export const INITIAL_STATE = {
  user: {
    
  },
}

const rootReducer = combineReducers ({
  user: UserReducer,
  form: formReducer,
});

export default rootReducer;
