import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';
import { Container, List, NavigationWrapper } from './Navigation.css';


const Navigation = ({ items = [], RightElement }) => {
  const itemNav = items.map(item => (<li ket={item.id}><Button variant="inline" to={item.to}>{item.content}</Button></li>))
  return (
    <Container>
      <NavigationWrapper>
        <List>
        {itemNav}
        </List>
        { RightElement }
      </NavigationWrapper>
    </Container>
  )
}
Navigation.propTypes = {
  items: PropTypes.array.isRequired,
};


export default Navigation
