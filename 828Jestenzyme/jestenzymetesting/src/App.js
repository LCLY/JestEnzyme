import React from 'react';
import Header from './components/header/index';
import Headline from './components/headline/index';
import SharedButton from './components/button/index';
import ListItem from './components/listItem/index';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
const tempArr = [
  {
    fName: 'Joe',
    lName: 'bloggs',
    email: 'asdsadsad@aawd.com',
    age: 24,
    onlineStatus: true,
  },
];
function App(props) {
  const { posts, onFetchPosts } = props;

  const fetch = () => {
    onFetchPosts();
  };

  const configButton = {
    buttonText: 'Get posts',
    emitEvent: fetch,
  };

  return (
    <div className="App">
      <Header />
      <section>
        <Headline
          header="Posts"
          desc="Click the button to render post"
          tempArr={tempArr}
        />
        <SharedButton {...configButton} />
        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body,
              };
              return <ListItem key={index} {...configListItem} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
