import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0;

  background: #3368d3;
`
const Wrapper = styled.div`
  padding-top: 140px;
  background: ${({ bg }) => (bg ? `#F2FAFF` : `#fff`)};

  .subTitle {
    width: 700px;
    margin: auto;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: center;
    color: #73809a;
  }
  .title-page {
    margin: 13px 0;
  }
`

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30;
  margin: 0px 135px;
  padding-bottom: 55px;
`
Section.Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 30px;
  width: 579px;

  .subTitle {
    font-family: Poppins;
    font-size: 28px;
    font-weight: 600;
    line-height: 42px;
    margin: 0;
    letter-spacing: 0em;
    text-align: left;
    color: #183b56;
    width: 559px;
  }
  .year {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    opacity: 0.3;
    margin-top: 15px;
    width: 559px;
    margin-bottom: 5px;
  }
`
Section.Item = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
  .image-text {
    margin-left: 30px;
  }
  .subTitle {
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #183b56;
    width: 379px;
  }
`
const Content = styled.div`
  .title {
    margin: 55px 0 39px;
    font-family: Manrope;
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0.005em;
    text-align: center;
    color: #fff;
  }
`
Content.Items = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 56px;
`

Content.Item = styled.div`
  display: flex;
  justify-content: center;
`

const Image = styled.img`
  width: ${({ width }) => (width ? `${width}px` : '80px')};
  height: ${({ height }) => (height ? `${height}px` : '80px')};
`

export { Container, Section, Wrapper, Image, Content }
