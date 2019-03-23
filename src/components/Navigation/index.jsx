import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  color: white;

  .navItems {
    width: 200px;
    display: grid;
    grid-template-columns : repeat(2, 1fr);
    justify-items: center;

    a {
      text-decoration: none;
      color: #fff !important;
      transition: 0.3s color ease-in-out;
      display: block;
    }

    a:hover {
      color: #777 !important;
    }

    li {
      list-style: none;
    }
  }

`;

const Logo = styled.img`
  height: 2.5rem;
  width: auto;
`;

class Navigation extends React.Component {
  state = {};

  render() {
    return (
      <Nav>
        <UpperNav>
          <Logo src={require('../../assets/images/moviemania-logo.svg')}/>
        </UpperNav >
        <LowerNav>
          <div className='navItems'>
            <li><Link to="/movies">MOVIES</Link></li>
            <li><Link to="/tv">TV SHOWS</Link></li>
          </div>
        </LowerNav>
      </Nav>
    );
  }
}

export default Navigation;
