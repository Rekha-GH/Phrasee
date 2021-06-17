import React from 'react';
import toJson from 'enzyme-to-json';
import * as ReactRedux from 'react-redux';


import PrivateRoute from './PrivateRoute';
import { shallow } from '../../setupTests';

describe('PrivateRoute Tests', () => {
  const useSelectorMock = jest.spyOn(ReactRedux, 'useSelector');

  test('PrivateRoute renders correctly', () => {
    useSelectorMock.mockImplementationOnce(() => { session: 'test' }); 
    const wrapper = shallow(<PrivateRoute><div>test</div></PrivateRoute>).dive();
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
