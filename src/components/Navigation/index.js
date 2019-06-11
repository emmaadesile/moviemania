import React from "react";
import { Link } from "@reach/router";
import BackButton from '../BackButton';
import { Nav, UpperNav, LowerNav, Logo } from "./Navigation.styles";

class Navigation extends React.Component {
  state = {};

  render() {
    return (
      <Nav>
        <UpperNav>
          <Logo src={require("../../assets/images/moviemania-logo.svg")} />
        </UpperNav>
        <LowerNav>
          <div className="navItems">
            {/* <BackButton /> */}
            <li>
              <Link to="/movies">MOVIES</Link>
            </li>
            <li>
              <Link to="/tv">TV SHOWS</Link>
            </li>
          </div>
        </LowerNav>
      </Nav>
    );
  }
}

export default Navigation;
