import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Navigation } from 'components';

const App = () => {
  return (
    <ThemeProvider>
      <div>
      dom
        <Navigation />
      </div>
    </ThemeProvider>
  )
}

export default App;
