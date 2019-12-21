import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Header from '../pages/Header';
import AboutPage from '../pages/AboutPage';

describe('<App />', () => {
  let wrapped;

  beforeEach(() => wrapped = shallow(<App />));

  it('renders Header', () => {
    expect(wrapped.find(Header).length).toEqual(1);
  });

  it('renders AboutPage', () => {
    expect(wrapped.find(AboutPage).length).toEqual(1);
  });
});
