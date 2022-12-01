import React from 'react'
import { Container, Wrapper } from './style'
const Card = ({ type, children, height, width, mr }) => {
  return (
    <Container>
      <Wrapper mr={mr} type={type} width={width} height={height}>
        {children || 'Generic button'}
      </Wrapper>
    </Container>
  )
}

export default Card
