import React from "react";

import { NavBarBackground } from "../style.js";

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
            <a href="https://link"> Home </a>
            <a href="https://link2"> Dark Mode </a>
            <a href="https://link3"> About </a>
            <a href="https://link4"> Contact </a>
          </ul>
        </div>
      </NavBarBackground>
    </header>
  );
}
