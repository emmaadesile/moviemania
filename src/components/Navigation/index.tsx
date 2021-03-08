import * as React from "react";
import { Link } from "@reach/router";
import { Nav, UpperNav, LowerNav, Logo } from "./Navigation.styles";
import LogoImg from "../../assets/images/moviemania-logo.svg";

const Navigation: React.FC = () => {
  return (
    <Nav>
      <UpperNav>
        <Link to="/">
          <Logo src={LogoImg} />
        </Link>
      </UpperNav>
      <LowerNav>
        <div className="navItems">
          <ul>
            <li>
              <Link to="/movies">MOVIES</Link>
            </li>
            <li>
              <Link to="/tv">TV SHOWS</Link>
            </li>
          </ul>
        </div>
      </LowerNav>
    </Nav>
  );
};

export default Navigation;
