import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, List } from './Navigation.css';
import { Wrapper } from 'components';

const Navigation = ({ items = []; RightElement }) => {
  const itemNav = items.map(item => (<li ket={item.id}><Link to={item.to}>{item.content}</Link></li>))
  return (
    <Container>
      <Wrapper>
        <List>
        {itemNav}
        </List>
        { RightElement }
      </Wrapper>
    </Container>
  )
}
Navigation.propTypes = {
  items: PropTypes.array.isRequired,
};


export default Navigation
