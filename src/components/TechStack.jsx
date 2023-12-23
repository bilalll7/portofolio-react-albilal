import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaReact,
  FaBootstrap,
  FaVuejs,
  FaLaravel,
  FaPhp,
  FaJava,
  FaPython,
  FaWordpress,
} from "react-icons/fa";
function TechStack() {
  return (
    <>
      <div className="tech">
        <div className="svg">
          <FaHtml5 />
        </div>
        <div className="tech-title">
          <h3 className="tech-language">HTML</h3>
          <p className="tech-language-p">Intermediate</p>
        </div>
      </div>
      <div className="tech">
        <div className="svg">
          <FaCss3 />
        </div>
        <div className="tech-title">
          <h3 className="tech-language">CSS</h3>
          <p className="tech-language-p">Intermediate</p>
        </div>
      </div>
      <div className="tech">
        <div className="svg">
          <FaJs />
        </div>
        <div className="tech-title">
          <h3 className="tech-language">JS</h3>
          <p className="tech-language-p">Intermediate</p>
        </div>
      </div>
      <div className="tech">
        <div className="svg">
          <FaReact />
        </div>
        <div className="tech-title">
          <h3 className="tech-language">React</h3>
          <p className="tech-language-p">Intermediate</p>
        </div>
      </div>
      <div className="tech">
        <div className="svg">
          <FaLaravel />
        </div>
        <div className="tech-title">
          <h3 className="tech-language">Laravel</h3>
          <p className="tech-language-p">Intermediate</p>
        </div>
      </div>
      <div className="tech">
        <div className="svg">
          <FaSass />
        </div>
        <div className="tech-title">
          <h3 className="tech-language">Sass</h3>
          <p className="tech-language-p">Intermediate</p>
        </div>
      </div>
      <div className="tech">
        <div className="svg">
          <FaPhp />
        </div>
        <div className="tech-title">
          <h3 className="tech-language">PHP</h3>
          <p className="tech-language-p">Intermediate</p>
        </div>
      </div>
      <div className="tech">
        <div className="svg">
          <FaPython />
        </div>
        <div className="tech-title">
          <h3 className="tech-language">Python</h3>
          <p className="tech-language-p">Intermediate</p>
        </div>
      </div>
      <div className="tech">
        <div className="svg">
          <FaJava />
        </div>
        <div className="tech-title">
          <h3 className="tech-language">Java</h3>
          <p className="tech-language-p">Intermediate</p>
        </div>
      </div>
    </>
  );
}

export default TechStack;
