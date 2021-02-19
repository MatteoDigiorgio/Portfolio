import React from 'react'
import {
  Info,
  ContentContainer,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Button,
  ImgWrapper,
  Img
} from './ContentElements'

const Content = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  topLine,
  headLine,
  description,
  img,
  profile,
  imgWidth,
  imgHeight,
  alt,
  start
}) => {

  return (
    <>
      <Info lightBg={lightBg}>
        <ContentContainer>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Button big fontBig primary>{buttonLabel}</Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} profile={profile} width={imgWidth} height={imgHeight} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </ContentContainer>
      </Info>
    </>
  )
}

export default Content
