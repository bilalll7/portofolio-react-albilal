import { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import Navbar from "../components/Navbar";
import TechStack from "../components/TechStack";
import Tools from "../components/Tools";

const override: cssOverride = {
  display: "flex",
  margin: "24rem auto",
};
function Skills() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const [tab, setTab] = useState(1);
  return (
    <>
      {loading ? (
        <MoonLoader color={"#3F72AF"} size={55} cssOverride={override} />
      ) : (
        <>
          <Navbar />
          <section class="skills" id="skills">
            <h2>Skills</h2>
            <h4>List of My Skills</h4>
            <div className="skills-wrapper">
              <div className="left-skills">
                <a
                  onClick={() => setTab(1)}
                  className={tab === 1 ? "garis-bawah" : ""}
                >
                  Tech Stack
                </a>
              </div>
              <div className="right-skills">
                <a
                  onClick={() => setTab(2)}
                  className={tab === 2 ? "garis-bawah" : ""}
                >
                  Tools
                </a>
              </div>
            </div>
            <div className="tech-skills-wrapper">
              {tab === 1 && (
                <>
                  <TechStack />
                </>
              )}
            </div>
            <div className="tools-skill-wrapper">
              {tab === 2 && (
                <>
                  <Tools />
                </>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Skills;
