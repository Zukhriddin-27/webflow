import styled from 'styled-components'

const getType = ({ type }) => {
  switch (type) {
    case 'dark':
      return {
        background: 'transparent',
        border: '1px solid #ffffff',
        color: '#fff',
      }
    case 'light':
      return {
        background: '#fff',
        border: '1px solid #e6e9ec',
        color: '#e6e9ec',
      }
    case 'primary':
      return {
        background: '#FBFBFB',
        border: '1px solid #EDEDED',
        color: '#fff',
      }

    default:
      return {
        background: '#FBFBFB',
        border: '1px solid #EDEDED',
        color: '#fff',
      }
  }
}

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  /* text-transform: capitalize; */
  border-radius: 2px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  height: ${({ height }) => (height ? `${height}px` : `44px`)};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  padding-top: ${({ icon }) => (icon ? '35px' : '20px')};
  margin-top: ${({ mt }) => (mt ? `${mt}px` : `24px`)};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : `24px`)};

  border: 1px solid #e6e9ec;
  border-radius: 8px;

  outline: none;
  :focus {
    border-bottom: 2px solid #e6e9ec;
  }
  /* ${getType} */
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
`
const Icon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 20px;
  top: 50%;
`
export { Container, Wrapper, Icon }
