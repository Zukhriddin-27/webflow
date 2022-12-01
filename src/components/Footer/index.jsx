import React from 'react'
import { Container, Section, Image, Icons, Brand } from './style'
import Logo from '../../assets/img/Logo.png'
const Footer = () => {
  return (
    <Container>
      <Section>
        <Section.Items>
          <Section.Item>
            <Image src={Logo} alt='' width={29} height={39} />
            <Brand>Birdseve Global</Brand>
          </Section.Item>
          <div className='content-title'>
            Interested in following along? Connect with us!
          </div>
          <Section.Item>
            <Icons.Facebook />
            <Icons.Instagram />
            <Icons.Twitter />
            <Icons.Youtube />
          </Section.Item>
        </Section.Items>
        <Section.Items>
          <div className='content-header'>Disvover</div>
          <div className='content-title'>Home</div>
          <div className='content-title'>Problems We Solve</div>
          <div className='content-title'>Case Study</div>
          <div className='content-title'>FAQ</div>
          <div className='content-title'>Login</div>
        </Section.Items>
        <Section.Items>
          <div className='content-header'>About Us</div>
          <div className='content-title'>Contact Us</div>
          <div className='content-title'>Blog Posts</div>
          <div className='content-title'>Careers</div>
        </Section.Items>
        <Section.Items>
          <div className='content-header'>More</div>
          <div className='content-title'>Something</div>
          <div className='content-title'>Something</div>
          <div className='content-title'>Something</div>
          <div className='content-title'>Something</div>
        </Section.Items>
        <Section.Items>
          <div className='content-header'>Head Office</div>
          <div className='content-title'>
            55 Eglinton Avenue East Suite 208 Toronto, Ontario M4P 1G8
          </div>
        </Section.Items>
      </Section>
    </Container>
  )
}

export default Footer
