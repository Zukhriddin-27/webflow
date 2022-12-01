import React from 'react'
import {
  Container,
  Section,
  Wrapper,
  Image,
  Content,
  Img,
  Icons,
} from './style'
import home from '../../assets/img/hbface.png'
import card from '../../assets/img/girl-card.png'
import challenge from '../../assets/img/challenge.png'
import Enjoyed from '../Enjoyed'
import Started from '../Started'

const Header = () => {
  return (
    <>
      <Container>
        <Image src={home} alt='Home' width={1440} />
        <Wrapper>
          <Section.Items>
            <h1 className='title'>HBFace</h1>
          </Section.Items>

          <Section.Items>
            <p className='subTitle'>
              How HB Face is Scaling Up Their Ecommerce Brand with BirdsAI
              Marketing
            </p>
          </Section.Items>
        </Wrapper>
        <Section>
          <Section.Item pt={150}>
            <div className='bridge'>
              <div className='title'>Ecommerce Platform</div>
              <div className='subTitle'>Shopify</div>
            </div>
          </Section.Item>
          <Section.Item pt={100}>
            <div className='bridge'>
              <div className='title'>Industry</div>
              <div className='subTitle'>Beauty & Cosmetics</div>
            </div>
          </Section.Item>
          <Section.Item pt={50}>
            <div className='bridge'>
              <div className='title'>Use Case</div>
              <div className='subTitle'>Growth & Scale</div>
            </div>
          </Section.Item>
          <Section.Item>
            <div className='bridge'>
              <div className='title' pt={0}>
                Additional Integrations
              </div>
              <div className='subTitle'>
                Google Analytics, Facebook/ Instagramm Ads, Googlle Ads, Klaviyo
              </div>
            </div>
          </Section.Item>
        </Section>
        <Section>
          <Content.Items>
            <div className='title'>
              <span>Haley Bogaert </span>
              Knows Beauty & Cosmetics
            </div>
            <div className='subTitle'>
              As one of Toronto’s most sought-after brow & Cosmetic experts,
              Haley Bogaert knows Her Stuff. Specializing in threading, the
              founder and CEO of HBFace cut her teeth at some of the city’s top
              makeup studios. Now, she’s well on her way to building a global
              beauty empire, with plans to open five locations in North America.
            </div>
            <div className='subTitle'>
              Her beauty empire is truly global. In addition to her brick and
              mortar locations, HBFace has expanded their presence online and
              sells their brilliant array of beauty products to customers on
              every continent.
            </div>
          </Content.Items>
          <Content.Items>
            <Content.Items.Card>
              <Content.Image>
                <Image src={card} width={544} />
              </Content.Image>
            </Content.Items.Card>
          </Content.Items>
        </Section>
        <Content bg={'#F2FAFF'}>
          <Section>
            <Content.Items>
              <Icons.Challenge />
              <Img src={challenge} width={544} />
            </Content.Items>
            <Content.Items>
              <div className='title'>
                <span>Challenge: </span>
              </div>
              <div className='subTitle'>
                The team was relying on spreadsheets and manual calculations for
                reporting and found it difficult to access critical KPI’s like
                customer lifetime value for the business as a whole, but most
                importantly, for segments of customers or products.
              </div>
              <div className='subTitle'>
                HBFace was growing, and growing fast. HBFace was quickly selling
                out of its products across locations and knew that an ecommerce
                platform was the answer. After setting up their Shopify site,
                the team at HBFace needed to hone in on which products to
                cross-sell, determine the best converting email flows and
                segment their customers.
              </div>
            </Content.Items>
          </Section>
        </Content>
      </Container>
      <Enjoyed />
      <Started />
    </>
  )
}

export default Header
