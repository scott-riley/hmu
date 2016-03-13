import {INITIAL_STATE} from './index';
import {FETCH_MESSAGES} from 'actions/index';

export default function(state = INITIAL_STATE.messages, action) {
  switch(action.type) {
    case FETCH_MESSAGES:
      return action.payload.data.data;
    default:
      return state;
  }
}
