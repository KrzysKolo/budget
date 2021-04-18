import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme.colors.gray.light};
  display: flex;
`;

const Navigation = () => {
  return (
    <Container>
      Text
    </Container>
  )
}

export default Navigation
