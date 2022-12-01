import styled from 'styled-components'
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  background: #263554;
`
const Wrapper = styled.div`
  padding: 96px 160px;
`
const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 32px 0;
`
Section.Items = styled.div`
  display: flex;
  justify-content: center;
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
    color: #fff;
    margin: auto;
    margin-top: 40px;
    width: 574px;
  }
  .title {
    font-weight: 700;
    text-align: center;

    margin-top: 64px;
    color: #fff;
  }
`
Section.Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 22px;
`
Section.Content = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #56637b;
  span {
    font-weight: 700;
  }
`
Section.Img = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  border: 1px solid ${({ bg }) => (bg ? `${bg}` : 'black')};
  background: ${({ bg }) => (bg ? `${bg}` : '#fff')};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`
const Image = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`

export { Container, Section, Wrapper, Image }
