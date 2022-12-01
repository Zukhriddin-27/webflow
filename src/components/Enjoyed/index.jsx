import React from 'react'
import { Button, Card } from '../Generic'
import { Container, Image, Section, Wrapper } from './style'
import card1 from '../../assets/card/card-1.png'
import card2 from '../../assets/card/card-2.png'
import card3 from '../../assets/card/card-3.png'
import card4 from '../../assets/card/card-4.png'
import card5 from '../../assets/card/card-5.png'
import card6 from '../../assets/card/card-6.png'

const Enjoyed = () => {
  return (
    <Container>
      <Wrapper>
        <Section.Items>
          <Button fs={14} width={111} height={26}>
            Solution
          </Button>
        </Section.Items>

        <Section.Items>
          <p className='subTitle'>
            With BirdsAI Marketing, HBFace has enjoyed:
          </p>
        </Section.Items>
        <Section>
          <Card width={352} height={216}>
            <Section.Item>
              <Section.Img bg={'#ECF2FE'}>
                <Image src={card1} />
              </Section.Img>
              <Section.Content>
                <span>Understood how each digital advertising channel</span>{' '}
                works with different segments of customers or products
              </Section.Content>
            </Section.Item>
          </Card>
          <Card width={352} height={216}>
            <Section.Item>
              <Section.Img bg={'#FEF8EC'}>
                <Image src={card2} />
              </Section.Img>
              <Section.Content>
                Developed
                <span> winning advertising and email marketing strategies</span>
              </Section.Content>
            </Section.Item>
          </Card>
          <Card width={352} height={216}>
            <Section.Item>
              <Section.Img bg={'#FEECFE'}>
                <Image src={card3} />
              </Section.Img>
              <Section.Content>
                <span>Saved time, greater efficiency and more accuracy</span> in
                ecommerce reporting
              </Section.Content>
            </Section.Item>
          </Card>
          <Card width={352} height={216}>
            <Section.Item>
              <Section.Img bg={'#F0FEEC'}>
                <Image src={card4} />
              </Section.Img>
              <Section.Content>
                <span>
                  Data from across sales and marketing channels in one place
                </span>
                , with an intuitive user experience that benefits the whole team
              </Section.Content>
            </Section.Item>
          </Card>
          <Card width={352} height={216}>
            <Section.Item>
              <Section.Img bg={'#FEF2EC'}>
                <Image src={card5} />
              </Section.Img>
              <Section.Content>
                <span> Instant access to critical KPIs</span> across customers,
                products, channels and subscriptions
              </Section.Content>
            </Section.Item>
          </Card>
          <Card width={352} height={216}>
            <Section.Item>
              <Section.Img bg={'#FEECEC'}>
                <Image src={card6} />
              </Section.Img>
              <Section.Content>
                Reporting insights that are helping to{' '}
                <span>
                  lay the groundwork for future ecommerce and subscription
                  expansion in other markets
                </span>
              </Section.Content>
            </Section.Item>
          </Card>
        </Section>
        <Section.Items>
          <Button width={308} height={50}>
            Learn How BirdsAI Can help you
          </Button>
        </Section.Items>
      </Wrapper>
    </Container>
  )
}

export default Enjoyed
