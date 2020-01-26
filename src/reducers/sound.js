import { TOGGLE_SOUND } from '../actions/types';

const INITIAL_STATE = {
  isOn: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_SOUND:
      return { ...state, isOn: !state.isOn };
    default:
      return state;
  }
};