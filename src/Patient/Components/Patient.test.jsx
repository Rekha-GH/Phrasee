import React from 'react';
import toJson from 'enzyme-to-json';
import * as ReactRedux from 'react-redux';


import Patient from './Patient';
import { shallow } from '../../setupTests';

describe('Patient Tests', () => {
  test('Patient renders correctly', () => {
    const wrapper = shallow(<Patient
        is_completed={false}
        joined={"2020-08-06T07:54:00.232Z"}
        last_visit_date={"2020-08-06T00:00:00.000Z"}
        name={"Adam S"}
    />);
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
