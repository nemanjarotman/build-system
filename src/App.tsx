import React from 'react';
import './App.css';

// Components
import Flex from './components/Flex';
import Wrapper from './components/Wrapper';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <Flex>
        <Heading />
        <Wrapper />
      </Flex>
    </div>
  );
}

export default App;
