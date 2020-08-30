import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttribute, testStore } from '../Utils/index';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Exmaple title 1',
          body: 'text',
        },
        {
          title: 'Exmaple title 2',
          body: 'text',
        },
        {
          title: 'Exmaple title 3',
          body: 'text',
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  it('should render without errors', () => {
    const component = findByTestAttribute(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });

  it('hideButtonHandler should update state as expected', () => {
    // this wont work with functional component, there's no instance for functional component
    const classInstance = wrapper.instance();
    console.log(classInstance.debug());
    classInstance.hideButtonHandler();
    const newState = classInstance.state.hideBtn;
    expect(newState).tobe(true);
  });
});
