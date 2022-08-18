import React from "react";
import { Image } from "../navApp/nav-app-style";

function CollatzPage() {
  return (
    <div>
      <span>
        <Image src="img/collatz.PNG" alt="Bilde av Collatz graph" />
      </span>
      <div class="bio-list-cont">
        <p>
          Sommer oppgave for level 3 kodehode. Runs the collatz conjecture on
          the input number or, if selected, on every number from 1 thru input
          number. With possibilities to show all collatz sequences as an graph.
        </p>
        <img src="img/html-5 (2).png" alt="" />
        <img src="img/java-script.png" alt="" />
        <img src="img/css-3.png" alt="" />
      </div>
    </div>
  );
}

export { CollatzPage };
