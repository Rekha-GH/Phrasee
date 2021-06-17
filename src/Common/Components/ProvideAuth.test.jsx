import React from 'react';
import toJson from 'enzyme-to-json';
import * as ReactRedux from 'react-redux';


import ProvideAuth from './ProvideAuth';
import { shallow } from '../../setupTests';

describe('ProvideAuth Tests', () => {
  const useSelectorMock = jest.spyOn(ReactRedux, 'useSelector');

  test('ProvideAuth renders correctly', () => {
    useSelectorMock.mockImplementationOnce(() => { session: 'test' }); 
    const wrapper = shallow(<ProvideAuth><div>test</div></ProvideAuth>).dive();
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
