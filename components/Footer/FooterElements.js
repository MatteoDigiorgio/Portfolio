import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Social = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover{
    color: ${({ socialName }) =>
    socialName === 'Twitter'
      ? '#1DA1F2'
      : socialName === 'Instagram'
        ? '#E1306C'
        : '#0077B5'};
    ;
  }
`
