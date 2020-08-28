import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttribute } from '../../../Utils/index';

// Setup should stay in local as some component might require state and others varied
const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  // to check for props exist
  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'test header',
        desc: 'test desc',
      };
      wrapper = setUp(props);
    });

    // start writing test cases here
    it('should render without errors', () => {
      const component = findByTestAttribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('should render a h1', () => {
      const h1 = findByTestAttribute(wrapper, 'header');
      expect(h1.length).toBe(1);
    });

    it('should render a desc', () => {
      const desc = findByTestAttribute(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  // to check for props null
  describe('Have NO props', () => {
    // setup the component without passing in any props
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    // start writing test cases here
    // In the headline.js we set that is header is null, we will return null which
    // causes render to not happen, so the HeadlineComponent should not render
    it('should not render', () => {
      const component = findByTestAttribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });

    // if we just want to make sure if the text is not rendered, we should probably target
    // that element and check the text length or check empty string
    // expect(component.text().length).toBe(0) or expect(component.text()).to.be.eql('');
    // it('should not render', () => {
    //   const component = findByTestAttribute(wrapper, 'header');
    //   expect(component.text().length).toBe(0);
    // });
  });
});
