import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from '../../../Utils/index';
import ListItem from './index';

describe('ListItem Component', () => {
  describe('Checking propTypes', () => {
    it('should not throw a warning', () => {
      // first need expected props
      const expectedProps = {
        title: 'test title',
        desc: 'test desc',
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'test title',
        desc: 'test desc',
      };

      wrapper = shallow(<ListItem {...props} />);
    });

    it('should render wihout error', () => {
      const component = findByTestAttribute(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('should render a title', () => {
      const title = findByTestAttribute(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('should render a desc', () => {
      const desc = findByTestAttribute(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });
  });

  describe('should not render', () => {
    let wrapper;
    beforeEach(() => {
      const props = { desc: 'some text' };

      wrapper = shallow(<ListItem {...props} />);
    });

    it('component is not rendered', () => {
      const component = findByTestAttribute(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
