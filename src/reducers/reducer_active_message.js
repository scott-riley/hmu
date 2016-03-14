import {INITIAL_STATE} from './index';
import {SET_ACTIVE_MESSAGE} from 'actions/index';

export default function(state = INITIAL_STATE.activeMessage, action) {
  switch(action.type) {
    case SET_ACTIVE_MESSAGE:
      const data = action.payload
      return data;
    default:
      return state;
  }
}
