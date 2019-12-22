import soundReducer from '../sound';
import { TOGGLE_SOUND } from '../../actions/types';

describe('soundReducer', () => {
  let newState;

  it('toggles isOn upon receiving TOGGLE_SOUND action', () => {
    const action = { type: TOGGLE_SOUND };
    newState = soundReducer({ isOn: true }, action);
    expect(newState.isOn).toBeFalsy();
    newState = soundReducer({ isOn: false }, action);
    expect(newState.isOn).toBeTruthy();
  });
  it('does not change isOn when receiving other types of action', () => {
    const action = { type: 'random' };
    newState = soundReducer({ isOn: true}, action);
    expect(newState.isOn).toBeTruthy();
  });
});