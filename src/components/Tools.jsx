import React from "react";
import { FaGitAlt, FaGithub, FaDatabase, FaNpm } from "react-icons/fa";
function Tools() {
  return (
    <>
      <div className="tech">
        <div className="svg">
          <FaGitAlt />
        </div>
        <div className="tech-title">
          <h3 className="tech-language">Git</h3>
          <p className="tech-language-p">Intermediate</p>
        </div>
      </div>
      <div className="tech">
        <div className="svg">
          <FaGithub />
        </div>
        <div className="tech-title">
          <h3 className="tech-language">Github</h3>
          <p className="tech-language-p">Intermediate</p>
        </div>
      </div>
      <div className="tech">
        <div className="svg">
          <FaDatabase />
        </div>
        <div className="tech-title">
          <h3 className="tech-language">MySql</h3>
          <p className="tech-language-p">Intermediate</p>
        </div>
      </div>
    </>
  );
}

export default Tools;
