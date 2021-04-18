import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({theme}) => theme.colors.gray.light};
  display: flex;
  padding: ${({ theme }) => theme.spacing.sm}px;
`;

const Navigation = () => {
  return (
    <Container>
      Text
    </Container>
  )
}

export default Navigation
