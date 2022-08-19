import { React } from "react";

import { NavBarBackground, LinkColor } from "../style.js";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header id="header">
      <NavBarBackground>
        <div id="nav">
          <img
            src="img/logo.png"
            alt="en logo jeg fant"
            width="60"
            height="60"
          />
          <ul>
            <LinkColor>
              <Link to="/">Home</Link>

              <a href="https://link2"> Dark Mode </a>
              <a href="https://link3"> About </a>
              <a href="https://link4"> Contact </a>
            </LinkColor>
          </ul>
        </div>
      </NavBarBackground>
    </header>
  );
}
