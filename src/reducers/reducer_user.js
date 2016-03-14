import {INITIAL_STATE} from './index';
import {LOG_IN_USER} from 'actions/index';

export default function(state = INITIAL_STATE.user, action) {
  switch(action.type) {
    case LOG_IN_USER:
      const data = action.payload.data;
      if(data.meta.error) {
        return {status: 'Oops! Your email or password seem to be wrong'}
      }
      localStorage.setItem("token", data.data[0].access_token);
      const userId = data.data[0].user_id;
      return {
        status: "success",
        userId: userId,
      }
    default:
      return state;
  }
}
