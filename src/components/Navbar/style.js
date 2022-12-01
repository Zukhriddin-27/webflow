import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div``
const Content = styled.div`
  max-width: 1440px;
  padding: 0 74px;
  width: 100%;
  margin: auto;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  .navlink {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #233456;
    margin-right: 18px;
  }
  .active {
    color: #3b72e0;
  }
`
const Image = styled.img`
  margin-right: 14px;
`
const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 0 32px;
  color: #233456;
  font-size: 16px;
  line-height: 24px;
  font-family: Poppins;
`
const Brand = styled.div`
  font-size: 18px;
  font-weight: 700;
`
const MenuWrapper = styled.div`
  width: 697px;
  border: 1px solid #fff;
  background: #ffffff;
  box-shadow: 3px 12px 55px #626fb4;
  border-radius: 8px;
  padding: 19px 24px;
  .title {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: #f2994a;
    text-align: start;
    margin: 0px 0 24px 0px;
  }
`
const MenuSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
`
MenuSection.Items = styled.div`
  .subtitle {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 8px;
    color: #233456;
  }
  .descr {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 137%;
    text-transform: capitalize;
    color: #73809a;
    margin-bottom: 24px;
  }
  .title-info {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 137%;
    /* or 16px */

    text-transform: capitalize;

    /* #73809A */

    color: #73809a;
  }
  .active {
    color: #3b72e0;
  }
`
const MenuContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 13px;
  padding: 12px;
  background: #f0f3f7;
`
MenuContent.Items = styled.div`
  width: 73px;
  height: 73px;
  background: #dfedf5;
`
const ModalContent = styled.div`
  .demo-modal__title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    text-transform: capitalize;
    color: #263554;
    text-align: center;
    margin-bottom: 32px;
    margin-top: 20px;
  }
  .form-title {
    margin: 8px 0 16px 0;
  }
  .form-title span {
    color: red;
  }
`
export {
  Container,
  Content,
  Wrapper,
  Section,
  Image,
  Link,
  Brand,
  MenuWrapper,
  MenuContent,
  MenuSection,
  ModalContent,
}
