import { React, useRef } from "react";
import { ProjectHeader } from "../../../style.js";
import { BrowserRouter, Link } from "react-router-dom";
import { Popup } from "reactjs-popup";

export function Navapp() {
  // this code makes the page scroll to the content
  const navappRef = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      // top: elementRef.current.offsetTop,
      top: 300,
      behavior: "smooth",
    });
    {
      console.log(elementRef);
    }
  };

  return (
    <div ref={navappRef} className="projects">
      <span>
        <img src="img/nav-app.PNG" alt="Bilde av NAV-appen" />
      </span>
      <div class="bio-list-cont">
        <ProjectHeader>
          <Link onClick={() => scrollToSection(navappRef)} to="/navapp">
            <h3> Nav-App</h3>
          </Link>
        </ProjectHeader>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis,
          est atque ipsam sint nobis autem aspernatur.{" "}
        </p>
        <img src="img/html-5 (2).png" alt="" />
        <img src="img/java-script.png" alt="" />
        <img src="img/css-3.png" alt="" />
      </div>
    </div>
  );
}
