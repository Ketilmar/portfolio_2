import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Image } from "./nav-app-style";
import { ProjectPageBackground } from "../../../style";

// this is a test page for testing with react-router-dom
export default function NavAppPage() {
  return (
    <div>
      <ProjectPageBackground>
        <Image src="./nav-app.PNG" alt="Bilde av NAV-appen" />

        <div class="bio-list-cont">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis,
            est atque ipsam sint nobis autem aspernatur. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. In facilis, est atque ipsam sint
            nobis autem aspernatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. In facilis, est atque ipsam sint nobis autem
            aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In facilis, est atque ipsam sint nobis autem aspernatur. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. In facilis, est atque
            ipsam sint nobis autem aspernatur.
          </p>
          <img src="./html-5 (2).png" alt="" />
          <img src="./java-script.png" alt="" />
          <img src="./css-3.png" alt="" />
        </div>
      </ProjectPageBackground>
    </div>
  );
}
