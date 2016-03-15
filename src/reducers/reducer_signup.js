import {INITIAL_STATE} from './index';
import {SIGN_UP_USER} from 'actions/index';

export default function(state = INITIAL_STATE.signUp, action) {
  switch(action.type) {
    case SIGN_UP_USER:
      console.log(action.payload.data);
      if(action.payload.data.meta.total > 0) {
        localStorage.setItem('token', action.payload.data.data[0].access_token);
        const userId =action.payload.data.data[0].user_id;
        localStorage.setItem('id', userId);
        return { status: "success", id: userId }
      }
      else if(action.payload.data.meta.error.message) {
        if(action.payload.data.meta.error.message.indexOf('duplicate') > -1) {
          return { status: "Oops! Look’s like that email already exists." }
        }
        else if(action.payload.data.meta.error.message.indexOf('alidation') > -1) {
          return { status: "Oops! Have you made sure your email is valid?" }
        }
      }

    default:
      return state;
  }
}
