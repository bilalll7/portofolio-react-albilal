import React from "react";
import Experience from "./Experience";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <>
      <div class="education-wrapper">
        <section id="education" class="education">
          <div class="education-title-wrapper">
            <h3 class="h3-education">Education</h3>
          </div>
          <ol class="list">
            <li class="item">
              <h4 class="item-title">Indonesian Computer University</h4>
              <span>2023 - Now</span>
              <p class="item-text">Informatics Engineering</p>
            </li>
            <li class="item">
              <h4 class="item-title">SMK Negeri 4 Kuningan</h4>
              <span>2020 - 2023</span>
              <p class="item-text">Software Engineering</p>
            </li>
          </ol>
        </section>
        <Experience />
      </div>
    </>
  );
}

export default Education;
