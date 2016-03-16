import {INITIAL_STATE} from './index';
import {FETCH_MESSAGES, MARK_MESSAGE_AS_READ, DELETE_MESSAGE} from 'actions/index';

export default function(state = INITIAL_STATE.messages, action) {
  switch(action.type) {
    case FETCH_MESSAGES:
      if(action.payload.data.meta.error) {
        return {
          perform: "redirect"
        }
      }
      else if(action.payload.data.meta.total > 0) {
        return action.payload.data.data;
      }
      else {
        return state;
      }
    case MARK_MESSAGE_AS_READ:
      const updateData = action.payload.data.data[0];
      const newState = [];
      state.map( (message) => {
        if(message.message._data.id == updateData.id) {
          const denormData = {
            message: {
              _data: { ...updateData }
            }
          }
          newState.push(denormData);
        }
        else {
          newState.push(message);
        }
      });
      return newState;
    case DELETE_MESSAGE:
      const messageToDelete = action.payload
      const deletedState = state.filter(m => { m.message && m.message._data.id !== action.payload });
      return deletedState;
    default:
      return state;
  }
}
