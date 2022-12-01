import React from 'react'
import { Button, Card } from '../Generic'
import { Container, Section, Wrapper, Image, Content, Img, Romb } from './style'
import Started from '../Started/index'
import marketing from '../../assets/img/marketing-home.png'
import Checked from '../../assets/img/checked.png'
import Ellipse from '../../assets/figure/Ellipse 100.png'
import romb from '../../assets/figure/Romb.png'
const Header = () => {
  return (
    <Container>
      <Section>
        <Section.Items>
          <h1 className='title'>Marketing Made Simple</h1>
        </Section.Items>
        <Img src={Ellipse} />
      </Section>
      <Section.Items>
        <p className='subTitle'>
          Providing Businesses With Powerful Marketing Strategies In A Click of
          A Button.
        </p>
      </Section.Items>
      <Section>
        <Button type='light' width={190} height={60}>
          Schedule a Demo
        </Button>
        <Button width={190} height={60}>
          Start free trial
        </Button>
      </Section>
      <Section>
        <Image src={marketing} alt='Home' mt={72} />
      </Section>
      <Wrapper>
        <div className='title'>TRUSTED BY THOUSANDS OF TOP BRANDS:</div>
        <Content>
          <div className='brand'>Google</div>
          <div className='brand'>UBER</div>
          <div className='brand'>BuzzFeed</div>
          <div className='brand'>SAMSUNG</div>
          <div className='brand'>stripe</div>
        </Content>
      </Wrapper>
      <Wrapper bg={'#fff'}>
        <Content.Card>
          <Card type={'light'}>
            <div className='content'>
              <div className='title'>Data At Your Fingertips</div>
              <div className='subTitle'>
                Reward your audience for sharing with friends — and watch your
                newsletter grow 20-200% faster. It couldn't be easier...
              </div>
              <div className='content-items'>
                <Image width={12} height={12} src={Checked} alt='Icon' />
                <div className='list'>
                  Integrate with your email platform in two-clicks
                </div>
              </div>
              <div className='content-items'>
                <Image width={12} height={12} src={Checked} alt='Icon' />
                <div className='list'>
                  Show a beautiful, in-email referral section
                </div>
              </div>
              <div className='content-items'>
                <Image width={12} height={12} src={Checked} alt='Icon' />
                <div className='list'>Lifetime Value</div>
              </div>
              <div className='btn'>
                <Button>Start free trial</Button>
                <Button type={'light'}>Get Started</Button>
              </div>
            </div>
          </Card>
          <Card type={'dark'}>sss</Card>
        </Content.Card>
        <div className='card'>
          <Card width={340} height={340}>
            ccd
          </Card>
          <Card type={'dark'} width={656} height={340}>
            <div className='subTitle'>
              SparkLoop is the fastest way to get a newsletter referral program
              — like TheSkimm and Morning Brew — up and running. I've tested
              different referral tools, but none is as easy to use or as cost
              effective as SparkLoop.
            </div>
            <div className='user-card'>
              <h3>Dan Oshinskiy</h3>
              <p>Inbox collective</p>
            </div>
          </Card>
        </div>
        <Content.Card>
          <Card type={'dark'}>sss</Card>

          <Card type={'light'}>
            <div className='content'>
              <div className='title'>Maximize Your ROI</div>

              <div className='content-items'>
                <Image width={12} height={12} src={Checked} alt='Icon' />
                <div className='list'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
              <div className='content-items'>
                <Image width={12} height={12} src={Checked} alt='Icon' />
                <div className='list'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>

              <div className='btn'>
                <Button>Start free trial</Button>
                <Button type={'light'}>Get Started</Button>
              </div>
            </div>
          </Card>
        </Content.Card>
        <Content.Card>
          <Card type={'light'}>
            <div className='content'>
              <div className='title'>Dedicated Account Manager</div>

              <div className='content-items'>
                <div className='list'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </div>
              </div>
              <div className='btn'>
                {/* eslint-disable-next-line */}
                <a href='#'>Learn more</a>
              </div>
            </div>
          </Card>
          <Card type={'dark'}>sss</Card>
        </Content.Card>
      </Wrapper>
      <Wrapper bg={'#fff'} style={{ position: 'relative' }}>
        <Romb src={romb} />
        <Wrapper.Romb>
          <Section>
            <Section.Items>
              <h1 className='title'>
                Your awesome <span>feature headline</span>
              </h1>
            </Section.Items>
          </Section>
          <Section.Items>
            <p className='subTitle'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </Section.Items>
          <Section>
            <Content.Grid bg={'#142445'}>
              <Card width={160} height={160} type={'light'}></Card>
              <Card width={160} height={160} type={'light'}></Card>
              <Card width={160} height={160} type={'light'}></Card>{' '}
              <Card width={160} height={160} type={'light'}></Card>{' '}
              <Card width={160} height={160} type={'light'}></Card>{' '}
              <Card width={160} height={160} type={'light'}></Card>{' '}
              <Card width={160} height={160} type={'light'}></Card>{' '}
              <Card width={160} height={160} type={'light'}></Card>{' '}
              <Card width={160} height={160} type={'light'}></Card>
              <Card width={160} height={160} type={'light'}></Card>
              <Card width={160} height={160} type={'light'}></Card>
              <Card width={160} height={160} type={'light'}></Card>
            </Content.Grid>
          </Section>
        </Wrapper.Romb>
      </Wrapper>
      <Wrapper bg={'#EAF4FD'}>
        <Section>
          <Section.Items>
            <h1 className='choose-title'>
              <span>"The no-brainer choice"</span>
            </h1>
          </Section.Items>
        </Section>
        <Section.Items>
          <p className='choose-subTitle'>
            When you choose SparkLoop over other solutions, you'll grow 2.3x
            faster, spend 3.7x less per referral, and save hundreds of hours
            wasted on boring manual work.
          </p>
        </Section.Items>

        <Content.Choose bg={'#EAF4FD'}>
          <Card type={'light'} width={351} height={388}>
            <div className='content'>
              <div className='choose-card__title'>Easy 2-click integration</div>
              <div className='choose-card__subtitle'>
                When you choose SparkLoop over other solutions, you'll grow 2.3x
                faster, spend 3.7x less per referral, and save hundreds of hours
                wasted on boring manual work.
              </div>
            </div>
          </Card>
          <Card type={'light'} width={351} height={388}>
            <div className='content'>
              <div className='choose-card__title'>Easy 2-click integration</div>
              <div className='choose-card__subtitle'>
                When you choose SparkLoop over other solutions, you'll grow 2.3x
                faster, spend 3.7x less per referral, and save hundreds of hours
                wasted on boring manual work.
              </div>
            </div>
          </Card>
          <Card type={'light'} width={351} height={388}>
            <div className='content'>
              <div className='choose-card__title'>Easy 2-click integration</div>
              <div className='choose-card__subtitle'>
                When you choose SparkLoop over other solutions, you'll grow 2.3x
                faster, spend 3.7x less per referral, and save hundreds of hours
                wasted on boring manual work.
              </div>
            </div>
          </Card>
          <Card type={'light'} width={351} height={388}>
            <div className='content'>
              <div className='choose-card__title'>Easy 2-click integration</div>
              <div className='choose-card__subtitle'>
                When you choose SparkLoop over other solutions, you'll grow 2.3x
                faster, spend 3.7x less per referral, and save hundreds of hours
                wasted on boring manual work.
              </div>
            </div>
          </Card>
        </Content.Choose>
      </Wrapper>
      <Wrapper bg={'#fff'}>
        <div className='question-title'>Frequently asked questions</div>
        <div className='questions'>
          <Wrapper.Items>
            <Wrapper.Item>
              <div className='questions-card__title'>Can I go to the moon?</div>
              <div className='questions-card__subtitle'>
                A very small stage in a vast cosmic arena tendrils of gossamer
                clouds white dwarf laws of physics cosmic ocean Ut enim ad
                minima veniam. The sky calls to us the only home we've ever
                known bits of moving fluff extraordinary claims require
                extraordinary evidence stirred by starlight.
              </div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className='questions-card__title'>Can I go to the moon?</div>
              <div className='questions-card__subtitle'>
                A very small stage in a vast cosmic arena tendrils of gossamer
                clouds white dwarf laws of physics cosmic ocean Ut enim ad
                minima veniam. The sky calls to us the only home we've ever
                known bits of moving fluff extraordinary claims require
                extraordinary evidence stirred by starlight.
              </div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className='questions-card__title'>Can I go to the moon?</div>
              <div className='questions-card__subtitle'>
                A very small stage in a vast cosmic arena tendrils of gossamer
                clouds white dwarf laws of physics cosmic ocean Ut enim ad
                minima veniam. The sky calls to us the only home we've ever
                known bits of moving fluff extraordinary claims require
                extraordinary evidence stirred by starlight.
              </div>
            </Wrapper.Item>
          </Wrapper.Items>
          <Wrapper.Items>
            <Wrapper.Item>
              <div className='questions-card__title'>Can I go to the moon?</div>
              <div className='questions-card__subtitle'>
                A very small stage in a vast cosmic arena tendrils of gossamer
                clouds white dwarf laws of physics cosmic ocean Ut enim ad
                minima veniam. The sky calls to us the only home we've ever
                known bits of moving fluff extraordinary claims require
                extraordinary evidence stirred by starlight.
              </div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className='questions-card__title'>Can I go to the moon?</div>
              <div className='questions-card__subtitle'>
                A very small stage in a vast cosmic arena tendrils of gossamer
                clouds white dwarf laws of physics cosmic ocean Ut enim ad
                minima veniam. The sky calls to us the only home we've ever
                known bits of moving fluff extraordinary claims require
                extraordinary evidence stirred by starlight.
              </div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className='questions-card__title'>Can I go to the moon?</div>
              <div className='questions-card__subtitle'>
                A very small stage in a vast cosmic arena tendrils of gossamer
                clouds white dwarf laws of physics cosmic ocean Ut enim ad
                minima veniam. The sky calls to us the only home we've ever
                known bits of moving fluff extraordinary claims require
                extraordinary evidence stirred by starlight.
              </div>
            </Wrapper.Item>
          </Wrapper.Items>
        </div>
      </Wrapper>
      <Started />
    </Container>
  )
}

export default Header
