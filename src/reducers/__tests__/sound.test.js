import soundReducer from '../sound';
import { TOGGLE_SOUND } from '../../actions/types';

describe('soundReducer', () => {
  it('toggles isOn upon receiving TOGGLE_SOUND action', () => {
    const action = { type: TOGGLE_SOUND };
    let newState = soundReducer({ isOn: true }, action);
    expect(newState.isOn).toBeFalsy();
    newState = soundReducer({ isOn: false }, action);
    expect(newState.isOn).toBeTruthy();
  });
});