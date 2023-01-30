import React from "react";
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
  Img,
} from "./ContentElements";

const Content = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  buttonLabelVisit,
  topLine,
  headLine,
  description,
  url,
  urlVisit,
  img,
  profile,
  visitable,
  downloadable,
  imgWidth,
  imgHeight,
  alt,
  start,
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
                {!downloadable && (
                  <a href={url} target="_blank" rel="noreferrer">
                    <Button big fontBig primary>
                      {buttonLabel}
                    </Button>
                  </a>
                )}

                {visitable && (
                  <a href={urlVisit} target="_blank" rel="noreferrer">
                    <Button big fontBig primary>
                      {buttonLabelVisit}
                    </Button>
                  </a>
                )}

                {downloadable && (
                  <a href={url} download target="_blank" rel="noreferrer">
                    <Button big fontBig primary>
                      {buttonLabel}
                    </Button>
                  </a>
                )}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img
                  src={img}
                  alt={alt}
                  profile={profile}
                  width={imgWidth}
                  height={imgHeight}
                />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </ContentContainer>
      </Info>
    </>
  );
};

export default Content;
