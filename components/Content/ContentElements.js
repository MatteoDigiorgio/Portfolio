import styled from 'styled-components'
import Image from 'next/image'

export const Info = styled.div`
  color: #fff;
  padding: 200px 0;
  background: ${({ lightBg }) => (lightBg ? '#BCC6E0' : '#1B2339')};
`

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    margin: auto;
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 100%;
  flex-basis: auto;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:  center;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`

export const TopLine = styled.div`
  font-size: 15px;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1.%;
  color: ${({ lightText }) => (lightText ? '#f7f8a' : '#1c2237')};
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`

export const Button = styled.button`
  justify-content: center;
  border-radius: 8px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.529);

  &::hover{
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px){
    width: 100%;
  }
`

export const ImgWrapper = styled.div`
  max-width: 550px;
  height: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`

export const Img = styled(Image)`
  max-width: 555px;
  margin: 0 0 10px 0;
  border-radius: ${({ profile }) => (profile ? '50%' : '0px')};
`