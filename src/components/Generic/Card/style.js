import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  background: #f2faff;
`

const getType = ({ type }) => {
  switch (type) {
    case 'dark':
      return {
        background: '#EAF4FD',
        border: '1px solid #EAF4FD',
      }
    case 'light':
      return {
        background: '#fff',
        border: '1px solid #fff',
      }

    default:
      return {
        background: '#F2FAFF',
        border: '1px solid #F2FAFF',
      }
  }
}

const Wrapper = styled.div`
  height: ${({ height }) => (height ? `${height}px` : '484px')};
  width: ${({ width }) => (width ? `${width}px` : '544px')};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : '0px')};
  margin-top: ${({ mt }) => (mt ? `${mt}px` : '0px')};
  margin-right: ${({ mr }) => (mr ? `${mr}px` : '0px')};
  border: 1px solid red;
  font-style: Poppins;

  ${getType}
  border-radius: 8px;
`

export { Container, Wrapper }
