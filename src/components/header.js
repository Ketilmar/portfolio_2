import { React } from "react";

import { NavBarBackground, LinkColor } from "../style.js";
import { Link } from "react-router-dom";
import { about } from "../pages/about/aboutPage.js";

export function Header() {
  return (
    <header id="header">
      <NavBarBackground>
        <div id="nav">
          <img
            src="img/logo.png"
            alt="en logo jeg fant"
            width="35"
            height="35"
          />
          <ul>
            <LinkColor>
              <Link to="/">Home</Link>

              <a href="https://link2"> Dark Mode </a>
              <Link to="about">About</Link>
              <a href="https://link4"> Contact </a>
            </LinkColor>
          </ul>
        </div>
      </NavBarBackground>
    </header>
  );
}
