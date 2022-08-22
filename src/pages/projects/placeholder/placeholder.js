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
        <img src="img/Sketchpad.png" alt="Placeholder image" />
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
        <img src="img/html-5 (2).png" alt="" />
        <img src="img/java-script.png" alt="" />
        <img src="img/css-3.png" alt="" />
      </div>
    </div>
  );
}
