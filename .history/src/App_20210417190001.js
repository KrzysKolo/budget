import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Navigation } from 'components';
import theme from 'utils/theme';
import GlobalStyles from './index.css';
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
