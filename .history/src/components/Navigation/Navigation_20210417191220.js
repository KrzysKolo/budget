import React from 'react'
import { Container, List } from './Navigation.css';
import { Wrapper } from 'components';

const Navigation = ({ items }) => {
  return (
    <Container>
      <Wrapper>
        <List>
          {items.map(item => (
            <li>
              <a>{item.content}</a>
            </li>
          ))}
        </List>
      </Wrapper>
    </Container>
  )
}

export default Navigation
