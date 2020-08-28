import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttribute } from '../../../Utils/index';

// Setup should stay in local as some component might require state and others varied
const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const logo = findByTestAttribute(component, 'logoIMG');
    expect(logo.length).toBe(1);
  });
});
