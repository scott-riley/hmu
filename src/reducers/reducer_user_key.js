import {INITIAL_STATE} from './index';
import {FETCH_KEY} from 'actions/index';

export default function(state = INITIAL_STATE.userKey, action) {
  switch(action.type) {
    case FETCH_KEY:
      const keyData = action.payload.data;
      return action.payload.data.data[0];
    default:
      return state;
  }
}
