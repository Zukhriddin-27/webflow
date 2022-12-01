import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  background: var(--bg);
  position: relative;
`
const Wrapper = styled.div`
  margin-top: 140px;
  padding-bottom: 50px;
  position: relative;
`

const Section = styled.div`
  display: flex;
  justify-content: center;
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 78px 195px 0 194px;

  gap: 131px;
`
Content.Items = styled.div`
  .title-feature {
    text-transform: capitalize;

    margin-bottom: 16px;
    margin-left: 10px;
    color: #263554;
    letter-spacing: 1px;
  }
  .subtitle {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
    color: #73809a;
  }
  .text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    margin-left: 10px;
    margin-bottom: 16px;
    width: 425px;
    /* or 22px */
    text-transform: capitalize;

    /* #73809A */
    color: #73809a;
  }
`
const Image = styled.img`
  height: ${({ height }) => (height ? `${height}px` : '323px')};
`
Image.Img = styled.img`
  position: absolute;
  left: -195px;
  top: -130px;
`
Image.Img1 = styled.img`
  position: absolute;
  right: -195px;
  top: -120px;
`
Image.Img3 = styled.img`
  position: absolute;
  right: -200px;
  bottom: -150px;
`
Image.Vec = styled.img`
  position: absolute;
  left: 640px;
`

export { Container, Section, Wrapper, Content, Image }
