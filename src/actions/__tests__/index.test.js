import { toggleSound } from '../index';
import { TOGGLE_SOUND } from '../types';

describe('toggleSound', () => {
  let action;

  beforeEach(() => action = toggleSound());

  it('has a type of TOGGLE_SOUND', () => {
    expect(action.type).toEqual(TOGGLE_SOUND);
  });
  it('does not have any payload', () => {
    expect(action.payload).toBeUndefined();
  });
});