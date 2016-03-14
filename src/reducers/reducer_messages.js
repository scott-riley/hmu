import {INITIAL_STATE} from './index';
import {FETCH_MESSAGES, MARK_MESSAGE_AS_READ} from 'actions/index';

export default function(state = INITIAL_STATE.messages, action) {
  switch(action.type) {
    case FETCH_MESSAGES:
      if(action.payload.data.meta.error) {
        return {
          perform: "redirect"
        }
      }
      return action.payload.data.data;
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
    default:
      return state;
  }
}
