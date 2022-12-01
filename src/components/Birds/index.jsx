import React from 'react'
import { Tabs, Timeline } from 'antd'
import { Container, Section, Wrapper, Content, Image, Slider } from './style'
import Customer from '../../assets/img/customer.png'
import Customer1 from '../../assets/img/customer1.png'
import Average from '../../assets/img/average.png'
import Return from '../../assets/img/return.png'
import Impressions from '../../assets/img/impressions.png'
import Rate from '../../assets/img/rate.png'
import People from '../../assets/img/people.png'
import Title from '../../assets/img/title.png'
import Vector from '../../assets/img/Vector.png'

import { Button } from '../Generic'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper'

const Feature = () => {
  const onChange = (key) => {
    console.log(key)
  }
  return (
    <Container>
      <Wrapper>
        <Section>
          <Button fs={12} type='purple' height={26} width={166}>
            All Marketing
          </Button>
        </Section>
        <div className='title-page'>Birds AI Marketing Metrics</div>
        <div className='subTitle'>
          If you can”t measure it, you can”t track it. BirdsAI Marketing™
          automatically calculates and reports on the key metrics you need to
          run your business effectively
        </div>

        <Content>
          <Content.Items>
            <Content.Item>
              <Image src={Average} alt='Per' />
            </Content.Item>
            <Content.Item>
              <div className='cardTitle'>Average revenue per customer</div>
            </Content.Item>
          </Content.Items>
          <Content.Items>
            <Content.Item>
              <Image src={Customer} alt='Per' />
            </Content.Item>
            <Content.Item>
              <div className='cardTitle'>Customer retiention rate</div>
            </Content.Item>
          </Content.Items>
          <Content.Items>
            <Content.Item>
              <Image src={Rate} alt='Per' />
            </Content.Item>
            <Content.Item>
              <div className='cardTitle'>Repurchase rate</div>
            </Content.Item>
          </Content.Items>
          <Content.Items>
            <Content.Item>
              <Image src={Impressions} alt='Per' />
            </Content.Item>
            <Content.Item>
              <div className='cardTitle'>Impressions</div>
            </Content.Item>
          </Content.Items>
          <Content.Items>
            <Content.Item>
              <Image src={Return} alt='Per' />
            </Content.Item>
            <Content.Item>
              <div className='cardTitle'>return on ad spend</div>
            </Content.Item>
          </Content.Items>
          <Content.Items>
            <Content.Item>
              <Image src={Customer1} alt='Per' />
            </Content.Item>
            <Content.Item>
              <div className='cardTitle'>customer life time value</div>
            </Content.Item>
          </Content.Items>
        </Content>
      </Wrapper>
      <Section>
        <Section.Items>
          <Image src={People} alt='avatar image' width={618} height={750} />
        </Section.Items>
        <Section.Items>
          <div className='cardTitle'>
            Why Choose <br /> BirdsAI Marketing
          </div>
          <Tabs
            style={{ color: '#fff' }}
            defaultActiveKey='1'
            size='small'
            onChange={onChange}
            items={[
              {
                label: `Email`,
                key: '1',
                children: (
                  <>
                    <div className='cardTitle'>
                      Supercharge Your Email Marketing Performance
                    </div>
                    <Timeline>
                      <Timeline.Item color='white'>
                        <div className='tabs'>
                          CIdentify who the right customers to market so you can
                          build high converting email flows and get them back to
                          your store
                        </div>
                      </Timeline.Item>
                      <Timeline.Item color='white'>
                        <div className='tabs'>
                          See what products and SKU's your customers are
                          purchasing and most likely to purchase next
                        </div>
                      </Timeline.Item>
                      <Timeline.Item color='white'>
                        <div className='tabs'>
                          Find out what the perfect date and time to email your
                          customers is.
                        </div>
                      </Timeline.Item>
                    </Timeline>
                  </>
                ),
              },
              {
                label: `Predict`,
                key: '2',
                children: (
                  <>
                    <div className='cardTitle'>
                      Supercharge Your Email Marketing Performance
                    </div>
                    <Timeline>
                      <Timeline.Item color='white'>
                        <div className='tabs'>
                          CIdentify who the right customers to market so you can
                          build high converting email flows and get them back to
                          your store
                        </div>
                      </Timeline.Item>
                      <Timeline.Item color='white'>
                        <div className='tabs'>
                          Find out what the perfect date and time to email your
                          customers is purchasing and most likely to purchase
                          next
                        </div>
                      </Timeline.Item>
                      <Timeline.Item color='white'>
                        <div className='tabs'>
                          See what products and SKU's your customers are
                          purchasing and most likely to purchase next Find out
                          what the perfect date and time to email your customers
                          is.
                        </div>
                      </Timeline.Item>
                    </Timeline>
                  </>
                ),
              },
              {
                label: `Advertise`,
                key: '3',
                children: (
                  <>
                    <div className='cardTitle'>
                      Supercharge Your Email Marketing Performance
                    </div>
                    <Timeline>
                      <Timeline.Item color='white'>
                        <div className='tabs'>
                          See what products and SKU's your customers are
                          purchasing and most likely to purchase next
                        </div>
                      </Timeline.Item>
                      <Timeline.Item color='white'>
                        <div className='tabs'>
                          CIdentify who the right customers to market so you can
                          build high converting email flows and get them back to
                          your store
                        </div>
                      </Timeline.Item>
                      <Timeline.Item color='white'>
                        <div className='tabs'>
                          Find out what the perfect date and time to email your
                          customers is.
                        </div>
                      </Timeline.Item>
                    </Timeline>
                  </>
                ),
              },
              {
                label: `Track`,
                key: '4',
                children: (
                  <>
                    <div className='cardTitle'>
                      Supercharge Your Email Marketing Performance
                    </div>
                    <Timeline>
                      <Timeline.Item color='white'>
                        <div className='tabs'>
                          See what products and SKU's your customers are
                          purchasing and most likely to purchase next
                        </div>
                      </Timeline.Item>
                      <Timeline.Item color='white'>
                        <div className='tabs'>
                          Find out what the perfect date and time to email your
                          customers is.
                        </div>
                      </Timeline.Item>
                      <Timeline.Item color='white'>
                        <div className='tabs'>
                          CIdentify who the right customers to market so you can
                          build high converting email flows and get them back to
                          your store
                        </div>
                      </Timeline.Item>
                    </Timeline>
                  </>
                ),
              },
            ]}
          />
        </Section.Items>
      </Section>
      <Wrapper bg>
        <Section>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <Slider>
                <div className='title-img'>
                  <Image src={Title} alt='title-image' width={51} height={40} />
                </div>
                <div className='slider-items'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
                <div className='slider-logo'>
                  <Image src={Vector} alt='card-logo' />
                  <h4>Logoipsum</h4>
                </div>
              </Slider>
            </SwiperSlide>
            <SwiperSlide>
              <Slider>
                <div className='title-img'>
                  <Image src={Title} alt='title-image' width={51} height={40} />
                </div>
                <div className='slider-items'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
                <div className='slider-logo'>
                  <Image src={Vector} alt='card-logo' />
                  <h4>Logoipsum</h4>
                </div>
              </Slider>
            </SwiperSlide>
            <SwiperSlide>
              <Slider>
                <div className='title-img'>
                  <Image src={Title} alt='title-image' width={51} height={40} />
                </div>
                <div className='slider-items'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
                <div className='slider-logo'>
                  <Image src={Vector} alt='card-logo' />
                  <h4>Logoipsum</h4>
                </div>
              </Slider>
            </SwiperSlide>
            <SwiperSlide>
              <Slider>
                <div className='title-img'>
                  <Image src={Title} alt='title-image' width={51} height={40} />
                </div>
                <div className='slider-items'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
                <div className='slider-logo'>
                  <Image src={Vector} alt='card-logo' />
                  <h4>Logoipsum</h4>
                </div>
              </Slider>
            </SwiperSlide>
          </Swiper>
        </Section>
      </Wrapper>
    </Container>
  )
}

export default Feature
