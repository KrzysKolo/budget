import React from 'react'
import styled from 'styled-components'
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
