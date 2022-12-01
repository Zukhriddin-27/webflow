import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 76px 0;
  background: radial-gradient(50% 50% at 50% 50%, #1f52bb 0%, #3468d3 100%);
`
const Wrapper = styled.div`
  background: ${({ bg }) => (bg ? `${bg}` : '#fafbff')};
  height: auto;

  .title {
    align-items: center;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 5.099999904632568px;
    padding-top: 80px;
  }
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin: 60px 160px 60px 160px;
    background: #eaf4fd;
    padding: 24px;
  }
  .card .subTitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 170%;
    color: #233456;
    padding: 18px 18px 108px 0;
    text-align: start;
  }
  .user-card {
  }
  .user-card h3 {
    font-size: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    line-height: 170%;
    color: #233456;
  }
  .user-card p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;
    letter-spacing: 2.5px;
    color: #73809a;
  }
  .choose-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    text-transform: capitalize;
    color: #3b72e0;
    margin-top: 164px;
  }
  .choose-subTitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    margin-top: 24px;
    text-align: center;
    text-transform: capitalize;
    color: #56637b;
  }
  .questions {
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 119px;
    padding: 48px 135px 124px 135px;
  }
  .question-title {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -0.4px;
    padding: 98px 135px 0 135px;
  }
`
Wrapper.Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 28px;
`

Wrapper.Item = styled.div`
  .questions-card__title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    color: #3b72e0;
    margin-bottom: 10px;
    text-align: start;
  }

  .questions-card__subtitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: start;
    color: #56637b;
  }
`
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 135px;
  .brand {
    font-size: 26px;
    opacity: 0.3;
    margin-top: 52px;
    padding-bottom: 100px;
  }
`
Content.Choose = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-content: center;
  max-width: 732px;
  width: 100%;
  margin: auto;
  gap: 32px;
  padding: 32px 160px 170px 160px;
  background: #eaf4fd;
  position: relative;
  .content {
    margin: 30px;
  }
  .choose-card__title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    text-align: start;
    text-transform: capitalize;
    color: #233456;
    margin-top: 200px;
    margin-bottom: 8px;
  }
  .choose-card__subtitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-transform: capitalize;
    color: #56637b;
  }
`
Content.Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 736px;
  max-height: 1251px;
  height: 100%;
  margin: 0 0 160px 0;
`
Content.Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding: 60px 160px 60px 160px;
  background: ${({ bg }) => (bg ? `${bg}` : '#fff')};
  .content-items {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    margin-bottom: 20px;
  }
  .btn {
    display: flex;
    justify-content: flex-start;
  }
  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 120%;
    text-transform: capitalize;
    color: #263554;
    text-align: start;
    margin-bottom: 32px;
  }
  .subTitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-align: start;
    text-transform: capitalize;
    margin-bottom: 24px;
    margin-top: 24px;
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
  .list {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    text-transform: capitalize;
    color: #73809a;
  }
`

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 770px;
  margin: auto;
  position: relative;
`
Section.Items = styled.div`
  width: 700px;
  margin: auto;

  .subTitle {
    color: #fff;
    margin: auto;
    margin-top: 24px;
    margin-bottom: 24px;
    width: 516px;
  }
  .title {
    font-family: Manrope;
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: -1px;
    text-align: center;
  }
`

const Image = styled.img`
  width: ${({ width }) => (width ? ` ${width}px` : '780px')};
  height: ${({ height }) => (height ? ` ${height}px` : '480px')};
  margin-right: 16px;
  margin-top: ${({ mt }) => (mt ? `${mt}px` : '0px')};
`
const Img = styled.img`
  position: absolute;
  top: 40px;
`
const Romb = styled.img``
Wrapper.Romb = styled.div`
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
`
export { Container, Section, Wrapper, Image, Content, Img, Romb }
