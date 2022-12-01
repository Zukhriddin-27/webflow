import React from 'react'
import { Container, Content } from './style'

import { Button } from '../Generic'

const Started = () => {
  return (
    <Container>
      <Content>
        <div className='title'>Get started with Birdseye</div>
        <Content.Items>
          <Button type={'light'} width={190} height={60}>
            Start free trial
          </Button>
          <Button ml={10} type={'primary'} width={210} height={60}>
            Schedule a Demo
          </Button>
        </Content.Items>
      </Content>
    </Container>
  )
}

export default Started
