import { React } from "react";
import { Header } from "../src/components/header.js";
import { Navapp } from "./pages/projects/navApp/nav-app.js";
import { Collatz } from "./pages/projects/collatz/collatz";
import { Placeholder } from "./pages/projects/placeholder/placeholder";
// import { ProjectHeader } from "./style.js";
import NavAppPage from "./pages/projects/navApp/nav-appPage.js";
import { CollatzPage } from "./pages/projects/collatz/CollatzPage.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import { About } from "./pages/about/aboutPage.js";
import { PlaceholderPage } from "./pages/projects/placeholder/placeholderPage.js";

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
              {/* <Routes>
                <Route path="/about" element={<About />} />
              </Routes> */}
              <Routes>
                <Route path="/navapp" element={<NavAppPage />} />
                <Route path="/collatz" element={<CollatzPage />} />
                <Route path="/placeholder" element={<PlaceholderPage />} />
              </Routes>
              <Navapp />
              <Collatz />

              <Placeholder />
              <Placeholder />
              <Placeholder />
              <Placeholder />
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
