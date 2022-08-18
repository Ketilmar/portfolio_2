import React from "react";
import { ProjectHeader } from "../../../style.js";
import { BrowserRouter, Link } from "react-router-dom";

export function Navapp() {
  return (
    <div className="projects">
      <span>
        <img src="img/nav-app.PNG" alt="Bilde av NAV-appen" />
      </span>
      <div class="bio-list-cont">
        <ProjectHeader>
          <Link to="/navapp">
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
