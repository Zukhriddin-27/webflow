import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  background: #f2faff;
`
const Wrapper = styled.div`
  padding-top: 72px;
`
const Section = styled.div``
Section.Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -1px;
    color: #263554;
    display: flex;
  }
  span {
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    margin-left: 14px;

    text-align: center;
  }
  .subTitle {
    width: 936px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 70px;
  }
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 135px;
  gap: 26px;
`
Content.Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  height: auto;
`

Content.Item = styled.div`
  height: auto;

  width: 544px;
  border: 1px aolid #fff;
  border-radius: 8px;
  padding: 36px;
  background: #ffffff;
  box-shadow: 3px 12px 50px rgba(98, 111, 180, 0.08);
  border-radius: 8px;
  margin-bottom: 35px;

  .card-title {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 16px;
    margin-top: 20px;
    color: #263554;
  }
  .card-info {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-transform: capitalize;
    color: #73809a;
    display: flex;
    justify-content: flex-start;
  }
  span {
    font-family: 'Poppins';

    color: #3b72e0;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    line-height: 150%;
  }
  .forma {
    margin-top: 36px;
  }
`
Content.Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin: 240px 162px 80px 162px;
  .content {
    margin-top: 150px;
    width: 475px;
  }
  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 120%;
    text-align: start;
    color: #263554;
  }
  .subTitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    text-align: start;
    text-transform: capitalize;
    margin-bottom: 16px;
    margin-top: 16px;
    color: #73809a;
  }
  span {
    font-family: Poppins;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    color: #3b72e0;
  }
  a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #006eff;
  }
`

const Image = styled.img``
export { Container, Section, Wrapper, Content, Image }
