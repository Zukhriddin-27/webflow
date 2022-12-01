import React from 'react'
import { Container } from './style'
const Button = ({ children, type, onClick, width, height, fs, ml }) => {
  return (
    <Container
      onClick={onClick}
      type={type}
      width={width}
      height={height}
      fs={fs}
      ml={ml}
    >
      {children || 'Generic button'}
    </Container>
  )
}

export default Button
