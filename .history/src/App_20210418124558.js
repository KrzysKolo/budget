import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation, Wrapper, Button } from 'components';
import { connect } from 'react-redux';
import { fetchBudget } from 'data/actions/budget.actions';
import theme from 'utils/theme';
import GlobalStyles from './index.css';

const App = ({ budget, fetchBudget }) => {
  useEffect(() => {
    fetchBudget(1)
  }, [fetchBudget]);

  console.log(budget);
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <Router>
        <Navigation  items={[
            { id: 1, content: 'Homepage', to: '/' },
            { id: 2, content: 'Budget', to: '/budget' }
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
const mapStateToProps = state => ({
  budget: state.budget.budget,
});
const mapDispatchToProps = dispatch => ({
  fetchBudget: () => dispatch(fetchBudget()),
})
export default connect(mapStateToProps, mapDispatchToProps )(App);
