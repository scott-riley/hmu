import { createStore, combineReducers } from 'redux';
import UserReducer from './reducer_user';
import MessagesReducer from './reducer_messages';
import { reducer as formReducer } from 'redux-form';

export const INITIAL_STATE = {
  user: {

  },
  messages: [

  ]
}

const rootReducer = combineReducers ({
  user: UserReducer,
  messages: MessagesReducer,
  form: formReducer,
});

export default rootReducer;
