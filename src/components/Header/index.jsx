import React from 'react'
import { Button } from '../Generic'
import { Container, Section, Wrapper, Image, Img } from './style'
import home from '../../assets/img/home.png'
import header from '../../assets/figure/home.png'
const Header = () => {
  return (
    <Container>
      <Image src={header} />
      <Wrapper>
        <Section>
          <Section.Items>
            <h1 className='title'>
              Make Ecommerce More <span>Profitable</span>
            </h1>
          </Section.Items>
        </Section>
        <Section.Items>
          <p className='subTitle'>
            BirdsAI Marketing™ is an all-in-one solution to run and scale up
            your ecommerce business. We take the guesswork out of digital
            advertising to help your business save money, grow revenue and
            advertise confidently.
          </p>
        </Section.Items>
        <Section>
          <Button type='light' width={190} height={60}>
            Start free trial
          </Button>
          <Button ml={10} width={190} height={60}>
            Schedule a Demo
          </Button>
        </Section>
        <Section>
          <Img src={home} alt='Home' />
        </Section>
      </Wrapper>
    </Container>
  )
}

export default Header
