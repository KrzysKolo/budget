import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation, Wrapper, Button } from 'components';
import { connect } from 'react-redux';
import { fetchBudget } from 'data/actions';
import theme from 'utils/theme';
import GlobalStyles from './index.css';
import budget from 'data/reducers/budget.reducer';
const App = ({ budget }) => {
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
  addNote: (text) => dispatch(addNote(text))
})
export default connect(mapStateToProps, mapDispatchToProps )(App);
