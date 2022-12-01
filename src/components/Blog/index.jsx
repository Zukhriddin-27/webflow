import React from 'react'
import { Container, Section, Wrapper, Content, Image } from './style'
import Started from '../Started/index'
import blog1 from '../../assets/img/blog1.png'
import blog2 from '../../assets/img/blog2.png'
import blog3 from '../../assets/img/blog3.png'
import blog4 from '../../assets/img/blog3.png'

import { Button } from '../Generic'

const Blog = () => {
  return (
    <Container>
      <Wrapper bg>
        <Content.Item>
          <Button fs={12} type='purple' height={26} width={166}>
            Our Unique Content
          </Button>
        </Content.Item>
        <div className='title-page'>Learn about x with our blog </div>
        <Section>
          <Section.Items>
            <Image src={blog1} alt='blog' width={579} height={330} />
            <div className='year'>Jul 20, 2022</div>
            <div className='subTitle'>
              Consectures Dummy Content Velit officia consequat duis enim velit
              mollit
            </div>
            <div className='year'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
              xercitation veniam.
            </div>
          </Section.Items>

          <Section.Items>
            <Section.Item>
              <Image src={blog2} alt='blog' width={197} height={160} />
              <div className='image-text'>
                <div className='year'>Jul 20, 2022</div>
                <div className='subTitle'>
                  Consectures Content Velitpato officia consequat duis enim
                  velit mollit
                </div>
              </div>
            </Section.Item>
            <Section.Item>
              <Image src={blog3} alt='blog' width={197} height={160} />
              <div className='image-text'>
                <div className='year'>Jul 20, 2022</div>
                <div className='subTitle'>
                  Consectures Content Velitpato officia consequat duis enim
                  velit mollit
                </div>
              </div>
            </Section.Item>
            <Section.Item>
              <Image src={blog4} alt='blog' width={197} height={160} />
              <div className='image-text'>
                <div className='year'>Jul 20, 2022</div>
                <div className='subTitle'>
                  Consectures Content Velitpato officia consequat duis enim
                  velit mollit
                </div>
              </div>
            </Section.Item>
          </Section.Items>
        </Section>
      </Wrapper>
      <Started />
    </Container>
  )
}

export default Blog
