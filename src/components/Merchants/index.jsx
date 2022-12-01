import React from 'react'
import { Card } from '../Generic'
import { Container, Section, Wrapper, Content, Image } from './style'
import Started from '../Started'
import free from '../../assets/img/free.png'
import account from '../../assets/img/man.png'
import place from '../../assets/img/place.png'
import maximize from '../../assets/img/maxinizme.png'
import support from '../../assets/img/support.png'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Section.Items>
            <h1 className='title'>
              Solution
              <span>For Merchants</span>
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
              <div className='card-title'> 7 Day Free Trial</div>
              <div className='card-info'>
                BirdsAI Marketing offers a 7 day free trial that includes full
                training, onboarding and a marketing strategy session. We'll
                review your business, help you set goals and identify
                opportunities to help you achieve them.
              </div>
            </Content.Item>
            <Content.Item>
              <Image src={account} alt='' />
              <div className='card-title'> Dedicated Account Manager</div>
              <div className='card-info'>
                Once signed up, you'll be matched with an account manager who is
                dedicated to your success. <br />
                <br /> Book a call with your account manager to review your
                business, ask a question and even receive advice on how to grow
                sales. Our account managers work across a variety of industries
                and are experts at helping brands grow. Give them a call today.
              </div>
            </Content.Item>
            <Content.Item>
              <Image src={place} alt='' />
              <div className='card-title'>
                {' '}
                Every Campaign You've Run In One Place
              </div>
              <div className='card-info'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </div>
            </Content.Item>
          </Content.Items>
          <Content.Items>
            <Content.Item>
              <Image src={maximize} alt='' />
              <div className='card-title'> Maximize Your ROI</div>
              <div className='card-info'>
                Analyze all of your marketing channels in one place including ad
                spend, customer insight and lifetime value. You'll get immediate
                feedback and understand what's working and what isn't. Let
                BirdsAI Marketing steer you in the right direction so you can
                advertise confidently.
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
            <Content.Items></Content.Items>
          </Content.Items>
        </Content>
      </Wrapper>
      <Content.Card>
        <Card>
          <div className='content'>
            <div className='title'>
              Get To Know Your <span>Customers</span>
            </div>
            <div className='subTitle'>
              Instead of sending out blanket emails, you can create a unique
              customer experience using BirdsAI Marketing. Find out who your
              customers are, what they're buying, when they're buying and what
              they're likely to buy next.
            </div>
            {/* eslint-disable-next-line */}
            <a href='#'>Learn more</a>
          </div>
        </Card>
        <Card type={'dark'}>sss</Card>
        <Card type={'dark'}>ssssssss</Card>
        <Card>
          <div className='content'>
            <div className='title'>
              Your awesome
              <br />
              <span>feature headline</span>
            </div>
            <div className='subTitle'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </div>
            {/* eslint-disable-next-line */}
            <a href='#'>Learn more</a>
          </div>
        </Card>
      </Content.Card>

      <Started />
    </Container>
  )
}

export default Header
