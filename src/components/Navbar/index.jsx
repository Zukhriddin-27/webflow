import React, { useState } from 'react'
import { Button, Input } from '../Generic'
import { Modal } from 'antd'

import {
  Container,
  Content,
  Wrapper,
  Section,
  Link,
  Brand,
  Image,
  MenuWrapper,
  MenuSection,
  MenuContent,
  ModalContent,
} from './style'
import { navbar } from '../../utils'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import Logo from '../../assets/img/Logo.png'
import { Dropdown } from 'antd'
const Navbar = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const menu = (
    <MenuWrapper>
      <div className='title'>Solutions</div>
      <MenuSection>
        <MenuSection.Items>
          <div className='subtitle'>
            {/* eslint-disable-next-line */}
            <a
              href='/merchants'
              className={({ isActive }) => isActive && 'active'}
            >
              For Merchants
            </a>
          </div>
          <div className='descr'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{' '}
          </div>
        </MenuSection.Items>
        <MenuSection.Items>
          <div className='subtitle'>
            {/* eslint-disable-next-line */}
            <a
              href='/agencies'
              className={({ isActive }) => isActive && 'active'}
            >
              For Agencies
            </a>
          </div>
          <div className='descr'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{' '}
          </div>
        </MenuSection.Items>
        <MenuSection.Items>
          <div className='subtitle'>
            {/* eslint-disable-next-line */}
            <a
              href='/marketing'
              className={({ isActive }) => isActive && 'active'}
            >
              Featured Customer Story
            </a>
          </div>
          <div className='descr'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia n deserunt ullamco est sit aliqu
          </div>
        </MenuSection.Items>
      </MenuSection>
      <MenuContent>
        <MenuContent.Items></MenuContent.Items>
        <MenuSection.Items>
          <div className='subtitle'>Case Study #1 - TBD</div>
          <div className='title-info'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </div>
        </MenuSection.Items>
      </MenuContent>
    </MenuWrapper>
  )

  return (
    <Container>
      <Content>
        <Wrapper>
          <Section onClick={() => navigate('/home')}>
            <Image src={Logo} alt='Brand logo' />
            <Brand>Bredseyes global</Brand>
          </Section>
          <Section>
            <Dropdown
              overlay={menu}
              placement='bottomRight'
              icon
              arrow={{ pointAtCenter: false }}
              trigger='click'
            >
              <div className='navlink'>Solution</div>
            </Dropdown>
            {navbar.map(({ path, title, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    to={path}
                    key={index}
                    className={({ isActive }) => isActive && 'active'}
                  >
                    {title}
                  </Link>
                )
              )
            })}
          </Section>
          <Section>
            <>
              <Button onClick={showModal} fs={15} type='light' width={172}>
                Schedule a Demo
              </Button>
              <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
              >
                <ModalContent>
                  <div className='demo-modal__title'>Schedule a demo</div>
                  <label className='form-title'>
                    First Name <span>*</span>{' '}
                  </label>
                  <Input mt={8} mb={16} />
                  <label className='form-title'>
                    Last Name <span>*</span>
                  </label>
                  <Input mt={8} mb={16} />
                  <label className='form-title'>
                    Phone Number <span>*</span>
                  </label>
                  <Input mt={8} mb={16} />
                  <label className='form-title'>
                    Country <span>*</span>
                  </label>
                  <Input mt={8} mb={16} />
                  <label className='form-title'>
                    Agency Name <span>*</span>
                  </label>
                  <Input mt={8} mb={16} />
                  <label className='form-title'>
                    Number of Shopify Clients <span>*</span>
                  </label>
                  <Input mt={8} mb={16} />
                  <Button width={'%'} onOk={handleOk} onCancel={handleCancel}>
                    Comfirm
                  </Button>
                </ModalContent>
              </Modal>
            </>
            <Button ml={10}>Start free trial</Button>
            <Button ml={10} type='purple' width={91}>
              Sign in
            </Button>
          </Section>
        </Wrapper>
      </Content>
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Navbar
