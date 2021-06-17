import React from 'react';
import toJson from 'enzyme-to-json';
import * as ReactRedux from 'react-redux';


import PatientPage from './PatientPage';
import { shallow } from '../../setupTests';

describe('PatientPage Tests', () => {
  const useSelectorMock = jest.spyOn(ReactRedux, 'useSelector');

  test('PatientPage renders correctly when types are not available', () => {
    useSelectorMock.mockImplementationOnce(() => []); 
    const wrapper = shallow(<PatientPage />);
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('PatientPage renders correctly when types are available', () => {
    useSelectorMock.mockImplementationOnce(() => ['a_level', 'b_level']);
    
    const wrapper = shallow(<PatientPage />);
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
