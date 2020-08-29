import moxios from 'moxios';
import { testStore } from './../../Utils/index';
import { fetchPosts } from './../actions';

describe('fetchPosts action', () => {
  beforeEach(() => {
    // we do this so whenever we hit axios, its not going to go out to the internet to make request
    moxios.install();
  });

  // restore axios to its former state
  afterEach(() => {
    moxios.uninstall();
  });

  test('Store is updated correctly', () => {
    const expectedState = [
      {
        title: 'Example title 1',
        body: 'some text',
      },
      {
        title: 'Example title 2',
        body: 'some text',
      },
      {
        title: 'Example title 3',
        body: 'some text',
      },
    ];

    const store = testStore();

    // accept a callback function
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedState });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
