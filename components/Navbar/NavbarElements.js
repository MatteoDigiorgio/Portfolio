import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: #101522;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 30px;
  max-width: 1100px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 40px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`

export const NavItem = styled.li`
  height:60px;
  border-bottom: 2px solid transparent;

  &:hover{
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px){
    width: 100%;

    &:hover{
      border: none;
    }
  }
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover{
      color: #4b59f7;
      transition: all 0.3s ease;
      cursor: pointer;
    }
  }
`