import { createStore, combineReducers } from 'redux';
import UserReducer from './reducer_user';
import MessagesReducer from './reducer_messages';
import ActiveMessageReducer from './reducer_active_message';
import { reducer as formReducer } from 'redux-form';

export const INITIAL_STATE = {
  user: {

  },
  messages: [

  ],
  activeMessage: {

  }
}

const rootReducer = combineReducers ({
  user: UserReducer,
  messages: MessagesReducer,
  activeMessage: ActiveMessageReducer,
  form: formReducer,
});

export default rootReducer;
