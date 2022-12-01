import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0;
  margin-bottom: 50px;
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
  justify-content: space-around;
  margin: 0 120px;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
Section.Items = styled.div`
  padding-top: 100px;
  height: 850px;
  .cardTitle {
    font-family: 'Manrope';
    width: 359px;
    text-align: start;
    color: #fff;
    margin-bottom: 18px;
  }
`
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24;
  margin: 47px 178px;
`
Content.Items = styled.div`
  width: 345px;
  height: 331px;
  border: 1px solid #fff;
  background: #ffffff;
  box-shadow: 3px 12px 50px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 75px 50px;
  margin-bottom: 36px;
`
Content.Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 17px;
  .cardTitle {
    text-transform: capitalize;
  }
`

const Image = styled.img`
  width: ${({ width }) => (width ? `${width}px` : '80px')};
  height: ${({ height }) => (height ? `${height}px` : '80px')};
`
const Slider = styled.div`
  height: 418px;
  width: 583px;
  border: 1px solid #fff;
  position: relative;
  /* background: #ffffff;
  box-shadow: 3px 12px 50px rgba(0, 0, 0, 0.08); */
  border-radius: 8px;
  .slider-items {
    margin: 57px 60px 137px 140px;
    width: 385px;
    height: 224px;
    text-align: start;
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */

    color: #263554;
  }
  .title-img {
    position: absolute;
    top: 57px;
    left: 67px;
    width: 51px;
    height: 40px;
  }
  .slider-logo {
    display: flex;
    align-content: center;
    text-align: center;

    position: absolute;
    bottom: 61px;
    left: 49px;
  }
  .slider-logo h4 {
    margin-top: 6px;
    margin-left: 10px;
  }
`

export { Container, Section, Wrapper, Image, Content, Slider }
