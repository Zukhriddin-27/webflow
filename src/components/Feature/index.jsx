import React from 'react'
import { Container, Section, Wrapper, Content, Image } from './style'
import Feature1 from '../../assets/img/feature-1.png'
import Feature2 from '../../assets/img/feature-2.png'
import Feature3 from '../../assets/img/feature-3.png'
import Feature4 from '../../assets/img/feature-4.png'
import Ellipse from '../../assets/figure/Ellipse.png'
import Ellipse2 from '../../assets/figure/Ellipse2.png'
import Ellipse3 from '../../assets/figure/Ellipse3.png'
import Vector from '../../assets/figure/Vector1.png'
import Vector2 from '../../assets/figure/Vector2.png'

import { Button } from '../Generic'
const Feature = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Button fs={12} type='purple' height={26} width={166}>
            Super Easy To Use
          </Button>
        </Section>
        <div className='title-page'>Our Features</div>
        <Content>
          <Content.Items>
            <Image.Img src={Ellipse} />
            <Image src={Feature1} alt='Feature-1' />
          </Content.Items>
          <Content.Items>
            <div className='subtitle'>Our integrations</div>
            <div className='title-feature'>
              Smart data connections, for insights across your entire business.
            </div>
            <Button width={203}>See All Integrations</Button>
          </Content.Items>
        </Content>
        <Image.Vec src={Vector} />
        <Content>
          <Content.Items>
            <div className='title-feature'>
              Connect With Your Customers No Matter Where They Are
            </div>
            <p className='text'>
              With BirdsAI Marketing, you'll be able to identify a segment of
              customers or products and estimate their growth rate automatically
            </p>
            <Button width={138}>Learn More</Button>
          </Content.Items>
          <Content.Items>
            <Image src={Feature2} alt='Feature-2' />
            <Image.Img1 src={Ellipse2} />
          </Content.Items>
        </Content>
        <Image.Vec src={Vector2} />

        <Content>
          <Content.Items>
            <Image src={Feature3} alt='Feature-3' height={284} />
          </Content.Items>
          <Content.Items>
            <div className='title-feature'>
              A Marketing Report Made Just For You
            </div>
            <div className='text'>
              You'll get a detailed report that includes everything a marketer
              needs to know. See how to better reach and advertise to these
              customers (products they purchase, location, gender, spending
              patterns, buying behavior and more)
            </div>
            <Button width={138}>Learn More</Button>
          </Content.Items>
        </Content>
        <Image.Vec src={Vector} />

        <Content>
          <Content.Items>
            <Image.Img src={Ellipse} />
            <div className='title-feature'>
              Where To Spend & How Much To Spend
            </div>
            <p className='text'>
              Our patent-pending algorithms analyze the segment you've built and
              in seconds, will recommend an advertising strategy and the exact
              digital ad channels and spend to get the best return. You'll
              achieve more revenue uplift, brand awareness and overall growth.
              All this in just a few clicks.
            </p>
            <Button width={138}>Learn More</Button>
          </Content.Items>
          <Content.Items>
            <Image src={Feature4} alt='Feature-4' height={359} />
            <Image.Img3 src={Ellipse3} />
          </Content.Items>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Feature
