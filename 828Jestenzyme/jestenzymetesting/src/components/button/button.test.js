import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from '../../../Utils/index';
import SharedButton from './index';

describe('Shared button component', () => {
  // check prop types
  describe('checking proptypes', () => {
    it('should not throw warning', () => {
      const expectedProps = {
        buttonText: 'example button text',
        emitEvent: () => {},
      };

      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'example button text',
        emitEvent: () => {},
      };

      wrapper = shallow(<SharedButton {...props} />);
    });

    it('should render a button', () => {
      const button = findByTestAttribute(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});
