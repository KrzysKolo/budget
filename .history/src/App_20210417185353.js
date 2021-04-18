import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Navigation } from 'components';
import theme from 'utils/theme';

const GlobalStyles = createGlobalStyle`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li + li {
      margin-left: ${({ theme }) => theme.spacing.xs}px;
    }
  }
`;


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
