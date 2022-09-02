import { React, useRef } from "react";
import { ProjectHeader } from "../../../style.js";
import { Link } from "react-router-dom";

export function Placeholder() {
  // this code makes the page scroll to the content
  const placeholderRef = useRef(null);
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
    <div ref={placeholderRef} className="projects">
      <span>
        <img src="./img/Sketchpad.png" alt="Placeholder image" />
      </span>
      <div class="bio-list-cont">
        <ProjectHeader>
          <Link
            onClick={() => scrollToSection(placeholderRef)}
            to="/placeholder"
          >
            <h3> Placeholder</h3>
          </Link>
        </ProjectHeader>
        <p>
          Sommer oppgave for level 3 kodehode. Runs the collatz conjecture on
          the input number or, if selected, on every number from 1 thru input
          number. With possibilities to show all collatz sequences as an graph.
        </p>
        <i class="fa-brands fa-html5 fa-2x"></i>
        <i class="fa-brands fa-square-js fa-2x"></i>
        <i class="fa-brands fa-css3-alt fa-2x"></i>
      </div>
    </div>
  );
}
