import React from "react";
import { Link } from "@reach/router";
import { Nav, UpperNav, LowerNav, Logo } from "./Navigation.styles";

class Navigation extends React.Component {
  state = {};

  render() {
    return (
      <Nav>
        <UpperNav>
          <Link to="/">
            <Logo src={require("../../assets/images/moviemania-logo.svg")} />
          </Link>
        </UpperNav>
        <LowerNav>
          <div className="navItems">
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
