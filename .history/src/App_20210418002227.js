import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navigation, Wrapper, Button } from 'components';
import theme from 'utils/theme';
import GlobalStyles from './index.css';
const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <Router>
        <Navigation  items={[
            { content: 'Homepage', to: '/' },
            { content: 'Budget', to: '/budget' }
          ]}
            RightElement={(
              <Button variant="regular" onClick={() => console.log("klik")}>Ustawienia</Button>
            )}
          />
        dom
        <Wrapper>
          <Switch>
            <Route exact path="/"  >Homepage</Route>
            <Route path="/budget"  >BudgetPage</Route>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  )
}

export default App;
