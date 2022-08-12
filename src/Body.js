import React from "react";
import { Navapp } from "./projects/navApp/nav-app.js";
import { Collatz } from "./projects/collatz/collatz";

function Body() {
  return (
    <div className="Body">
      <header id="header">
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
      </header>
      <main>
        <section class="content">
          <div class="centered">
            <h1> My Portfolio</h1>
            <p>
              <a href="https://github.com/Ketilmar">Something</a> /
              <a href="https://github.com/Ketilmar">Something other</a> /
              <a href="https://github.com/Ketilmar">Yet another</a> /
              <a href="https://github.com/Ketilmar">Annet</a> /
              <a href="https://github.com/Ketilmar">noe annet</a>
            </p>

            <ul class="bio-list">
              <Navapp />
              <Collatz />
              <Navapp />
              <Navapp />
              <Navapp />
              <Navapp />
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <p>
          <a href="https://github.com/Ketilmar">Something</a> /
          <a href="https://github.com/Ketilmar">Something other</a> /
          <a href="https://github.com/Ketilmar">Yet another</a> /
          <a href="https://github.com/Ketilmar">Annet</a> /
          <a href="https://github.com/Ketilmar">noe annet</a>
        </p>
      </footer>
    </div>
  );
}

export default Body;
