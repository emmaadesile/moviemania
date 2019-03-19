import React from 'react';
import styled from 'styled-components'
import './moviemania-logo.svg';

const Nav = styled.nav`
  height: 92px;
  background: #22262A;
`;

const UpperNav = styled.div`
  height: 52px;
  border: 1px solid #393939;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
`;

const LowerNav = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns : repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  color: white;
`;

const NavItem = styled.li`
  list-style: none;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

class Navigation extends React.Component {
  state = {};

  render() {
    return (
      <Nav>
        <UpperNav>
          <Logo src={require('./moviemania-logo.svg')}/>
        </UpperNav >
        <LowerNav>
          <NavItem>VIDEOS</NavItem>
          <NavItem>CHARACTERS</NavItem>
          <NavItem>COMICS</NavItem>
          <NavItem>MOVIES</NavItem>
          <NavItem>TV SHOWS</NavItem>
        </ LowerNav>
      </Nav>
    );
  }
}

export default Navigation;
