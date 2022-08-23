import React from "react";
import { Image } from "../navApp/nav-app-style";
import { ProjectPageBackground } from "../../../style";

// this is a test page for testing with react-router-dom
function PlaceholderPage() {
  return (
    <div>
      <ProjectPageBackground>
        <Image src="./Sketchpad.png" alt="Placeholder image" />

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

export { PlaceholderPage };
