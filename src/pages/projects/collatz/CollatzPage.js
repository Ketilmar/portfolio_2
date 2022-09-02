import React from "react";
import { Image } from "../navApp/nav-app-style";
import { text } from "./textConst.js";
import { ProjectPageBackground } from "../../../style";

function CollatzPage() {
  return (
    <div>
      <ProjectPageBackground>
        <span>
          <Image src="./img/collatz.PNG" alt="Bilde av Collatz graph" />
        </span>
        <div class="bio-list-cont">
          <p>{text.content.paragraph}</p>
          <i class="fa-brands fa-html5 fa-4x"></i>
          <i class="fa-brands fa-square-js fa-4x"></i>
          <i class="fa-brands fa-css3-alt fa-4x"></i>
        </div>
      </ProjectPageBackground>
    </div>
  );
}

export { CollatzPage };
