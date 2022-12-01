import styled from 'styled-components'
import { ReactComponent as challenge } from '../../assets/icons/challenge.svg'
const Container = styled.div`
  max-width: 1440px;
  height: fit-content;
  margin: auto;
  position: relative;
`
const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
`
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: auto;
  position: relative;
`
Section.Items = styled.div`
  margin: auto;
  z-index: 999;
  width: 960px;

  .subTitle {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -1px;
    color: #233456;
    margin-top: 40px;
  }
  .title {
    font-weight: 700;
    text-align: center;
    margin-top: 64px;
    color: #fff;
  }
`
const Image = styled.img`
  height: auto;
  width: 1440px;
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  object-fit: cover;
  z-index: 2;
`
Section.Item = styled.div`
  width: 264px;
  height: 246px;
  padding-top: ${({ pt }) => (pt ? `${pt}px` : '0px')};
  .bridge {
    border-left: 5px solid #3b72e0;
    padding-left: 15px;
    height: 49px;
  }
  .title {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }
  .subTitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    text-align: left;
    /* or 186% */

    color: #535e6a;
  }
`
const Content = styled.div`
  background: ${({ bg }) => (bg ? `${bg}` : '#fff')};
  width: 100%;
  max-width: 1440px;
  margin: auto;
  text-align: center;
`
Content.Items = styled.div`
  margin-top: 50px;
  padding: 80px 0;

  position: relative;
  height: fit-content;
  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 120%;
    text-transform: capitalize;
    text-align: left;
    width: 384px;
    margin-bottom: 24px;
  }
  span {
    color: #3b72e0;
    font-weight: 700;
  }
  .subTitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-transform: capitalize;
    color: #73809a;
    text-align: left;
    width: 449px;
    margin-bottom: 32px;
  }
`
Content.Items.Card = styled.div`
  width: 544px;
  height: 572px;
  background: blue;
  border-radius: 8px;
  position: relative;
`
Content.Image = styled.div`
  position: absolute;
  bottom: 28px;
  right: 28px;
`
const Icons = styled.div``
Icons.Challenge = styled(challenge)``
const Img = styled.img`
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  object-fit: cover;
  z-index: 2;
  position: absolute;
  left: 0;
`
export { Container, Section, Wrapper, Image, Content, Img, Icons }
