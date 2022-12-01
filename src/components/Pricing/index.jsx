import React from 'react'
import { Button } from '../Generic'
import { Divider, Tabs } from 'antd'
import { Container, Section, Wrapper, Content, Image, Img } from './style'
import Checked from '../../assets/img/checked.png'
import Home from '../../assets/figure/home.png'
import Started from '../Started/index'
const Header = () => {
  const onChange = (key) => {
    console.log(key)
  }

  return (
    <Container>
      <Img src={Home} />
      <Wrapper>
        <Section>
          <Section.Items>
            <h1 className='title'>
              Products and pricing that
              <span>meet your needs</span>
            </h1>
          </Section.Items>
        </Section>

        <Section>
          <Tabs
            defaultActiveKey='1'
            onChange={onChange}
            items={[
              {
                label: <Button>Monthtly</Button>,
                key: '1',
                children: (
                  <div className='price-type'>
                    <div className='subtitle'>
                      <div className='rate'>
                        <span>$249/month</span> billed quarterly
                      </div>
                      <div className='sale'>
                        <p> 7 day free trial </p>
                      </div>
                    </div>
                    <Content>
                      <Content.Items>
                        <div className='cardTitle'>Starter</div>
                        <div className='type'>Get Started For Free</div>
                        <Divider />
                        <div className='subTitle'>
                          A complete overview of your business's performance and
                          actionable insights to help you scale and grow
                        </div>
                        <Divider />

                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Free forever</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Unlimited users</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Unlimited Stores</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            Key Performance Indicators Updated Daily
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Repurchase Rate</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Lifetime Value</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Top Products</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            How to Time Sales/Marketing Efforts
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Male/Female Segments</div>
                        </Content.Item>
                        <Button width={266} height={48}>
                          Learn More
                        </Button>
                      </Content.Items>
                      <Content.Items>
                        <div className='cardTitle'>Pro</div>
                        <div className='type'> 7 day free trial</div>
                        <div className='price'>
                          Then $249/month billed quarterly
                        </div>
                        <Divider />
                        <div className='subTitle'>
                          Sophisticated algorithms automate your marketing
                          decisions and deliver the best return on your
                          advertising spend.
                        </div>
                        <Divider />
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            All of the benefits of BirdsAI Starter
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Detailed Customer Segment</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            Predictive Analytics Capabilities
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            Patent-pending marketing attribution
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Seasonality indicators</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            Automated advertising campaign suggestions
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Free forever</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            Supercharged email marketing
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Dedicated account manager</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Technical Supportr</div>
                        </Content.Item>
                        <Button width={266} height={48}>
                          Learn More
                        </Button>
                      </Content.Items>
                      <Content.Items>
                        <div className='cardTitle'>Enterprice</div>
                        <div className='type'>Get Your Custom Quote</div>
                        <Divider />
                        <div className='subTitle'>
                          Unified market reporting for large businesses in
                          several regions, extensive product lines, brands and
                          teams. Dedicated support and success managers with
                          enterprise-grade security.
                        </div>
                        <Divider />
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Everything in Pro</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Multi-user tenancy</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>24/7 technical support</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            White Label Opportunity or Custom Domain
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Industry Benchmarking</div>
                        </Content.Item>
                        <Button width={266} height={48}>
                          Learn More
                        </Button>
                      </Content.Items>
                    </Content>
                  </div>
                ),
              },
              {
                label: <Button>Annualy</Button>,
                key: '2',
                children: (
                  <div className='price-type'>
                    <div className='subtitle'>
                      <div className='rate'>
                        <span>$199/month</span> billed annually
                      </div>
                      <div className='sale'>
                        <p> 7 day free trial </p>
                      </div>
                    </div>
                    <Content>
                      <Content.Items>
                        <div className='cardTitle'>Starter</div>
                        <div className='type'>Get Started For Free</div>
                        <Divider />
                        <div className='subTitle'>
                          A complete overview of your business's performance and
                          actionable insights to help you scale and grow
                        </div>
                        <Divider />

                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Free forever</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Unlimited users</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Unlimited Stores</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            Key Performance Indicators Updated Daily
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Repurchase Rate</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Lifetime Value</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Top Products</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            How to Time Sales/Marketing Efforts
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Male/Female Segments</div>
                        </Content.Item>
                        <Button width={266} height={48}>
                          Learn More
                        </Button>
                      </Content.Items>
                      <Content.Items>
                        <div className='cardTitle'>Pro</div>
                        <div className='type'> 7 day free trial</div>
                        <div className='price'>
                          Then $249/month billed quarterly
                        </div>
                        <Divider />
                        <div className='subTitle'>
                          Sophisticated algorithms automate your marketing
                          decisions and deliver the best return on your
                          advertising spend.
                        </div>
                        <Divider />
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            All of the benefits of BirdsAI Starter
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Detailed Customer Segment</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            Predictive Analytics Capabilities
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            Patent-pending marketing attribution
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Seasonality indicators</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            Automated advertising campaign suggestions
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Free forever</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            Supercharged email marketing
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Dedicated account manager</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Technical Supportr</div>
                        </Content.Item>
                        <Button width={266} height={48}>
                          Learn More
                        </Button>
                      </Content.Items>
                      <Content.Items>
                        <div className='cardTitle'>Enterprice</div>
                        <div className='type'>Get Your Custom Quote</div>
                        <div className='price'>
                          Then $249/month billed quarterly
                        </div>
                        <Divider />
                        <div className='subTitle'>
                          Unified market reporting for large businesses in
                          several regions, extensive product lines, brands and
                          teams. Dedicated support and success managers with
                          enterprise-grade security.
                        </div>
                        <Divider />
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Everything in Pro</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Multi-user tenancy</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>24/7 technical support</div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>
                            White Label Opportunity or Custom Domain
                          </div>
                        </Content.Item>
                        <Content.Item>
                          <Image src={Checked} alt='Icon' />
                          <div className='list'>Industry Benchmarking</div>
                        </Content.Item>
                        <Button width={266} height={48}>
                          Learn More
                        </Button>
                      </Content.Items>
                    </Content>
                  </div>
                ),
              },
            ]}
          />
        </Section>
      </Wrapper>

      <Started />
    </Container>
  )
}

export default Header
