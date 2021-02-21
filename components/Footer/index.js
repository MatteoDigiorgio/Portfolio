import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {
  FooterContainer,
  Social,
  SocialWrap,
  SocialIcons,
  SocialIconLink,
  WebsiteRights
} from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Social>
          <SocialWrap>
            <WebsiteRights>MATTEO DIGIORGIO © 2021</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://twitter.com/digiorgio_' target='_blank' aria-label='Twitter' socialName='Twitter' rel='noreferrer'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/matteo_digiorgio/' target='_blank' aria-label='Instagram' socialName='Instagram' rel='noreferrer'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/matteo-digiorgio-1b0b97159/' target='_blank' aria-label='Linkedin' socialName='Linkedin' rel='noreferrer'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialWrap>
        </Social>
      </FooterContainer>
    </>
  )
}

export default Footer
