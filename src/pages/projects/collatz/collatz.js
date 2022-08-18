import React from "react";
import { ProjectHeader } from "../../../style.js";
import { Link } from "react-router-dom";

export function Collatz() {
  return (
    <div className="projects">
      <span>
        <img src="img/collatz.PNG" alt="Bilde av Collatz graph" />
      </span>
      <div class="bio-list-cont">
        <ProjectHeader>
          <Link to="/collatz">
            <h3> Collatz</h3>
          </Link>
        </ProjectHeader>
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
