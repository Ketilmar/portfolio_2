import { React, useRef } from "react";
import { ProjectHeader } from "../../../style.js";
import { BrowserRouter, Link } from "react-router-dom";
import { Popup } from "reactjs-popup";

export function Navapp() {
  // this code makes the page scroll to the content
  const navappRef = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      // use this property to decide where to scroll when clicked
      // top: elementRef.current.offsetTop,
      top: 250,
      behavior: "smooth",
    });
    {
      console.log(elementRef);
    }
  };

  return (
    <div ref={navappRef} className="projects">
      <span>
        <img src="./img/nav-app.PNG" alt="Bilde av NAV-appen" />
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
        <i class="fa-brands fa-html5 fa-2x"></i>
        <i class="fa-brands fa-square-js fa-2x"></i>
        <i class="fa-brands fa-css3-alt fa-2x"></i>
      </div>
    </div>
  );
}
