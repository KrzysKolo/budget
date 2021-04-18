import React from 'react';
import { Link } from 'react-router-dom';
import { Container, List } from './Navigation.css';
import { Wrapper } from 'components';

const Navigation = ({ items }) => {
  const itemNav = items.map(item => (<li ket={item.id}><Link to={item.to}>{item.content}</Link></li>))
  return (
    <Container>
      <Wrapper>
        <List>
        {itemNav}
        </List>
      </Wrapper>
    </Container>
  )
}

export default Navigation
