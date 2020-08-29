import React from 'react';
import Header from './components/header/index';
import Headline from './components/headline/index';

const tempArr = [
  {
    fName: 'Joe',
    lName: 'bloggs',
    email: 'asdsadsad@aawd.com',
    age: 24,
    onlineStatus: true,
  },
];
function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Headline
          header="Posts"
          desc="Click the button to render post"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
