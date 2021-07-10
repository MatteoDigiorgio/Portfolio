import React, { useState } from 'react'
import { IconContext } from 'react-icons/lib'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements'


const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks
                  onClick={handleClick} click={click}
                  to="profile"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-60}
                >
                  Profile
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={handleClick} click={click}
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-60}
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={handleClick} click={click}
                  to="articles"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-60}
                >
                  Articles
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={handleClick} click={click}
                  to="social"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  Social
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;

