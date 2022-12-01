import styled from 'styled-components'

const getType = ({ type }) => {
  switch (type) {
    case 'purple':
      return {
        background: '#B99DF1',
        border: '1.5px solid #B99DF1',
        color: '#fff',
      }
    case 'light':
      return {
        background: '#fff',
        border: '1.5px solid #3B72E0',
        color: '#3B72E0',
      }
    case 'primary':
      return {
        background: '#293c64',
        border: '1.5px solid #ffffff',
        color: '#ffffff',
      }
    case 'blue':
      return {
        background: '##293C64',
        border: '1.5px solid ##293C64',
        color: '#407BF2',
      }

    default:
      return {
        background: '#0061df',
        border: '1.5px solid #0061df',
        color: '#fff',
      }
  }
}
const getWidth = ({ width }) => {
  if (!width) return '146px'
  else if (`${width}`.includes('%')) return '100%'
  else return `${width}px`
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 91px;
  font-family: Poppins;
  font-style: normal;
  font-size: ${({ fs }) => (fs ? `${fs}px` : `16px`)};
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  border-radius: 2px;
  margin-left: ${({ ml }) => (ml ? `${ml}px` : `0px`)};
  height: ${({ height }) => (height ? `${height}px` : `50px`)};
  width: ${getWidth};
  border-radius: 5px;
  padding: 0 14px;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.2);
  /* padding: 0 ${({ pad }) => (pad ? `${pad}px` : `24px`)}; */

  cursor: pointer;
  ${getType}
  :active {
    opacity: 0.7;
  }
`

export { Container }
