import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  background: #f2faff;
  height: auto;
  position: relative;
`
const Wrapper = styled.div`
  padding-top: 76px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 770px;
  margin: auto;
  .subtitle {
    color: #fff;
    font-family: Poppins;
    font-size: 32px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0px;
    display: flex;
    justify-content: center;
    margin: 43px 0;
  }
  .rate {
    color: #fff;
    display: flex;
    justify-content: center;
    margin-right: 25px;
  }
  .sale {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #27ae60;
    background: #e4ffef;
    border: 1px solid #c7f3d3;
    border-radius: 52px;
    padding: 7px 18px;
  }
  span {
    text-align: center;
    margin-right: 8px;
    font-family: Poppins;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0px;
  }
`
Section.Items = styled.div`
  width: 700px;
  margin: auto;
  .title {
    margin-bottom: 42px;
  }
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`
Content.Items = styled.div`
  width: 328px;
  height: auto;
  height: 100%;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 30px 21px;

  .type {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #27ae60;
    border: 1px solid #27ae60;
    text-align: center;
    padding: 5px;
    border-radius: 3px;
    margin: 22px 0 28px 0;
  }
  .subTitle {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    color: #73809a;

    opacity: 0.7;
  }
  .price {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: #233456;
  }
`
Content.Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;

  .list {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #263554;
  }
`
const Image = styled.img`
  width: 12px;
  margin-right: 13px;
`
const Img = styled.img`
  margin-bottom: 680px;
`
export { Container, Section, Wrapper, Image, Content, Img }
