import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Navigation } from 'components';
import theme from 'utils/theme';

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <div>
      dom
        <Navigation items={[]}/>
      </div>
    </ThemeProvider>
  )
}

export default App;
