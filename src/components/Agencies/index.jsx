import React from 'react'
import { Container, Section, Wrapper, Content, Image } from './style'
import Started from '../Started'
import free from '../../assets/img/free.png'
import account from '../../assets/img/man.png'
import place from '../../assets/img/place.png'
import labeling from '../../assets/img/Labeling.png'
import aff from '../../assets/img/affiliate.png'

import support from '../../assets/img/support.png'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Section.Items>
            <h1 className='title'>
              Solution
              <span> For Agencies</span>
            </h1>
          </Section.Items>
          <Section.Items>
            <p className='subTitle'>
              Focus on actionable insights that drive growth with reporting
              features built for ecommerce - from lifetime value and
              profitability to customers, channels, products and more.
            </p>
          </Section.Items>
        </Section>
        <Content>
          <Content.Items>
            <Content.Item>
              <Image src={free} alt='' />
              <div className='card-title'> Data at Your Fingertips</div>
              <div className='card-info'>
                BirdsAI Marketing’s features are built to support large
                agencies. From custom reporting capabilities to enterprise
                white-label functionality, save time and effort by no longer
                having to log into each individual ad account or shopify
                dashboard. Get the reporting, automated insights and analytics
                you need as you and your clients grow.
              </div>
            </Content.Item>
            <Content.Item>
              <Image src={aff} alt='' />
              <div className='card-title'> Affiliate Opportunities</div>
              <div className='card-info'>
                Interested in selling BirdsAI Marketing or making referrals? Get
                in touch - we have a program.
              </div>
            </Content.Item>
            <Content.Item>
              <Image src={support} alt='' />
              <div className='card-title'> 24/7 Technical Support</div>
              <div className='card-info'>
                BirdsAI Marketing will always be available to support you and
                your business. And because we're always available, you can reach
                us by phone and email here:
              </div>
              <div className='card-info forma'>
                Phone Number - <span>647-450-8027</span>{' '}
              </div>
              <div className='card-info'>
                Email - <span>clientservices@birdseyeglobal.com</span>
              </div>
            </Content.Item>
          </Content.Items>
          <Content.Items>
            <Content.Item>
              <Image src={account} alt='' />
              <div className='card-title'> Dedicated Account Manager</div>
              <div className='card-info'>
                You are provided with an account manager that is dedicated to
                your success. Book a call with your account manager to review
                your clients, and see how BirdsAI can make your job easier. Our
                account managers work across a variety of industries within
                ecommerce and are experts at supporting agency growth.
              </div>
            </Content.Item>
            <Content.Item>
              <Image src={labeling} alt='' />
              <div className='card-title'>White Labeling Opportunities:</div>
              <div className='card-info'>
                BirdsAI Marketing can be whitelabelled for use as your agency’s
                proprietary ecommerce technology. You can use the dashboard to
                win new clients, develop innovative strategies through your
                pitch process and demonstrate how you are in search of services
                and offerings to help your clients grow
              </div>
            </Content.Item>
            <Content.Item>
              <Image src={place} alt='' />
              <div className='card-title'>Industry Benchmarking</div>
              <div className='card-info'>
                Everyone wants their piece of the market-share, but not everyone
                knows how to achieve it. With BirdsAI Marketing, you'll be able
                to provide your clients with unique insights into their industry
                and their competitors. Learn what ad channels are driving growth
                for competitors and explore new and innovative revenue
                opportunities at the same time
              </div>
            </Content.Item>
            <Content.Items></Content.Items>
          </Content.Items>
        </Content>
      </Wrapper>

      <Started />
    </Container>
  )
}

export default Header
