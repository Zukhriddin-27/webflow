import React from 'react'
import Feature from '../Feature'
import Header from '../Header'
import Bird from '../Birds'
import { Container } from './style'
import Blog from '../Blog'
const Home = () => {
  return (
    <Container>
      <Header />
      <Feature />
      <Bird />
      <Blog />
    </Container>
  )
}

export default Home
