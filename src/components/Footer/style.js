import styled from 'styled-components'

import { ReactComponent as facebook } from '../../assets/icons/facebook.svg'
import { ReactComponent as instagram } from '../../assets/icons/instagram.svg'
import { ReactComponent as twitter } from '../../assets/icons/twitter.svg'
import { ReactComponent as youtube } from '../../assets/icons/youtube.svg'

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  background: var(--bg);
`
const Brand = styled.div`
  font-size: 18px;
  font-weight: 700;
  align-items: center;
`
const Section = styled.div`
  padding: 69px 135px;
  display: flex;
  justify-content: space-between;
`
Section.Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  .content-header {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0px;
    text-align: left;
    color: #183b56;
    margin-bottom: 29px;
  }
  .content-title {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #6f7d9a;
    margin-bottom: 22px;
    width: 160px;
  }
`
Section.Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 46px;
  gap: 13px;
  .cardTitle {
    margin-left: 3px;
    margin-bottom: 46px;
  }
  .content-title {
    line-height: 28px;
  }
`
const Image = styled.img`
  width: ${({ width }) => (width ? `${width}px` : '80px')};
  height: ${({ height }) => (height ? `${height}px` : '80px')};
`
const Icons = styled.div``
Icons.Facebook = styled(facebook)`
  width: 37px;
  height: 37px;
  & path {
    fill: #2f63ce;
  }
  color: #fff;
`
Icons.Instagram = styled(instagram)`
  width: 37px;
  height: 37px;
  & path {
    fill: #2f63ce;
  }
  color: #fff;
`
Icons.Twitter = styled(twitter)`
  width: 37px;
  height: 37px;
  & path {
    fill: #2f63ce;
  }
  color: #fff;
`
Icons.Youtube = styled(youtube)`
  width: 37px;
  height: 37px;
  & path {
    fill: #2f63ce;
  }
  color: #fff;
`

export { Container, Section, Image, Icons, Brand }
