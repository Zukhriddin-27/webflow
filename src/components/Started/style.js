import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 55px 0;
  background: #3368d3;
`
const Content = styled.div`
  .title {
    font-family: Manrope;
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0.005em;
    text-align: center;
    margin-bottom: 39px;
    color: #fff;
  }
`
Content.Items = styled.div`
  display: flex;
  justify-content: center;
`

Content.Item = styled.div`
  display: flex;
  justify-content: center;
`

export { Container, Content }
