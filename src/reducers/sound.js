import { TOGGLE_SOUND } from '../actions/types';

const INITIAL_STATE = {
  sound: true
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_SOUND:
      return { ...state, sound: !state.sound };
    default:
      return state;
  }
};