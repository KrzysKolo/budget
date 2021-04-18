import React from 'react';
import { TheneProvider } from 'styled-components';
import { Navigation } from 'components';

const App = () => {
  return (
    <TheneProvider>
      <div>
      dom
        <Navigation />
      </div>
    </TheneProvider>
  )
}

export default App;
