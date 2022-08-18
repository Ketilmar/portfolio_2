import React from "react";
import { Image } from "../navApp/nav-app-style";
import { text } from "./textConst.js";

function CollatzPage() {
  return (
    <div>
      <span>
        <Image src="img/collatz.PNG" alt="Bilde av Collatz graph" />
      </span>
      <div class="bio-list-cont">
        <p>{text.content.paragraph}</p>
        <img src="img/html-5 (2).png" alt="" />
        <img src="img/java-script.png" alt="" />
        <img src="img/css-3.png" alt="" />
      </div>
    </div>
  );
}

export { CollatzPage };
