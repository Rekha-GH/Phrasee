import React from 'react';
import toJson from 'enzyme-to-json';

import App from './App';
import { shallow } from './setupTests';

describe('App Tests', () => {
  test('App renders correctly', () => {
    const wrapper = shallow(<App />);
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
