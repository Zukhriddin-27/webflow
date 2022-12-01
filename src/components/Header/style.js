import styled from 'styled-components'

const Container = styled.div`
  height: fit-content;
  margin: auto;
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
`
Section.Items = styled.div`
  width: 700px;
  margin: auto;

  .subTitle {
    color: #fff;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .title {
    padding: 0 35px;
  }
`
const Img = styled.img`
  height: auto;
  width: 750px;
  margin-top: 65px;
`
const Image = styled.img``

export { Container, Section, Wrapper, Image, Img }
