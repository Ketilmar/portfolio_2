import React from "react";
import { Header } from "../src/components/header.js";
import { Navapp } from "./pages/projects/navApp/nav-app.js";
import { Collatz } from "./pages/projects/collatz/collatz";
import { Placeholder } from "./pages/projects/placeholder/placeholder";
import { ProjectHeader } from "./style.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Body() {
  return (
    <div className="Body">
      <main>
        <section class="content">
          <Header />
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
              <ProjectHeader>
                <Navapp />
                <Collatz />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
              </ProjectHeader>
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
