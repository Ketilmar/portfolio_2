import React from "react";
import { Image } from "../navApp/nav-app-style";
import { ProjectPageBackground } from "../../../style";

// this is a test page for testing with react-router-dom
function PlaceholderPage() {
  return (
    <div>
      <ProjectPageBackground>
        <Image src="./img/Sketchpad.png" alt="Placeholder image" />

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
          <i class="fa-brands fa-html5 fa-4x"></i>
          <i class="fa-brands fa-square-js fa-4x"></i>
          <i class="fa-brands fa-css3-alt fa-4x"></i>
        </div>
      </ProjectPageBackground>
    </div>
  );
}

export { PlaceholderPage };
