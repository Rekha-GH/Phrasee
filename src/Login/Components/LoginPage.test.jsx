import React from 'react';
import toJson from 'enzyme-to-json';
import * as ReactRedux from 'react-redux';


import LoginPage from './LoginPage';
import { shallow } from '../../setupTests';

describe('LoginPage Tests', () => {
  const useSelectorMock = jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => undefined);

  test('LoginPage renders correctly', () => {
    const wrapper = shallow(<LoginPage></LoginPage>);
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
