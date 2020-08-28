import React from 'react';
import Header from './components/header/index';
import Headline from './components/headline/index';
function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Headline header="Posts" desc="Click the button to render post" />
      </section>
    </div>
  );
}

export default App;
