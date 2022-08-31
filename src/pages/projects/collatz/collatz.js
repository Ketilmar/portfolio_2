import { React, useRef } from "react";
import { ProjectHeader } from "../../../style.js";
import { Link, Outlet } from "react-router-dom";
import { text } from "./textConst.js";
import Popup from "reactjs-popup";

export function Collatz() {
  const { content } = text;
  console.log(content);
  // this code makes the page scroll to the content
  const CollatzRef = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      // top: elementRef.current.offsetTop,
      top: 250,
      behavior: "smooth",
    });
    {
      // trying to log what i need to scroll where i want.
      console.log(elementRef.current.offsetTop);
    }
  };

  return (
    <div ref={CollatzRef} className="projects">
      <span>
        <img src="./img/collatz.PNG" alt="Bilde av Collatz graph" />
      </span>
      <div class="bio-list-cont">
        <ProjectHeader>
          <Link
            onClick={(e) => {
              scrollToSection(CollatzRef);
              // console.log(e.target.parentNode.parentNode.parentNode.parentNode);
              // e.target.parentNode.parentNode.parentNode.parentNode.remove();
              // e.remove();
            }}
            to="/collatz"
          >
            <h3> {content.headline}</h3>
          </Link>
        </ProjectHeader>
        <p>{content.paragraph}</p>
        {/* <img src="./img/html-5 (2).png" alt="" /> */}
        <i class="fa-brands fa-html5 fa-2x"></i>
        <i class="fa-brands fa-square-js fa-2x"></i>
        <i class="fa-brands fa-css3-alt fa-2x"></i>
      </div>
    </div>
  );
}
