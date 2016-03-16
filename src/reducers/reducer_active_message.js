import {INITIAL_STATE} from './index';
import {SET_ACTIVE_MESSAGE, FETCH_ACTIVE_MESSAGE, DELETE_MESSAGE} from 'actions/index';

export default function(state = INITIAL_STATE.activeMessage, action) {
  switch(action.type) {
    case SET_ACTIVE_MESSAGE:
      const data = action.payload
      return data;
    case FETCH_ACTIVE_MESSAGE:
      const fetchData = action.payload.data.data[0];
      if(fetchData) {
        return fetchData;
      }
      else {
        return state;
      }
    case DELETE_MESSAGE:
      return {};
    default:
      return state;
  }
}
