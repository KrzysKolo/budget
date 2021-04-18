import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, List, NavigationWrapper } from './Navigation.css';


const Navigation = ({ items = [], RightElement }) => {
  const itemNav = items.map(item => (<li ket={item.id}><Link to={item.to}>{item.content}</Link></li>))
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
