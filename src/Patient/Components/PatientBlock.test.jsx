import React from 'react';
import toJson from 'enzyme-to-json';
import * as ReactRedux from 'react-redux';


import PatientBlock from './PatientBlock';
import { shallow } from '../../setupTests';

describe('PatientBlock Tests', () => {
  const useSelectorMock = jest.spyOn(ReactRedux, 'useSelector');

  test('PatientBlock renders correctly when list is not available', () => {
    useSelectorMock.mockImplementationOnce(() => []); 
    const wrapper = shallow(<PatientBlock title={'A Level'} type='a_level' />);
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('PatientBlock renders correctly when list is available', () => {
    useSelectorMock.mockImplementationOnce(() => [{
      hospital_id: "56f165b7f21cbefc43efee7bi8yui8uyui8uy",
      is_completed: false,
      joined: "2020-08-06T07:54:00.232Z",
      last_visit_date: "2020-08-06T00:00:00.000Z",
      name: "Adam S",
      type: "a_level", 
      _id: "5f2bb7185756010021aecf228uyhgyuy7ujhy7u"
    }]);

    const wrapper = shallow(<PatientBlock title={'A Level'} type='a_level' />);
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
