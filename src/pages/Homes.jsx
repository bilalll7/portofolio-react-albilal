import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import hero from "../img/profil1.png";
import Type from "../components/Type";
import SocialMedia from "../components/SocialMedia";
import { FaArrowRight } from "react-icons/fa";
import MoonLoader from "react-spinners/MoonLoader";

const override: cssOverride = {
  display: "flex",
  margin: "24rem auto",
};

function Homes() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading ? (
        <MoonLoader color={"#3F72AF"} size={55} cssOverride={override} />
      ) : (
        <>
          <Navbar />
          <section class="hero" id="home">
            <main class="content">
              <div class="hero-left">
                <h1 class="hero-title">
                  Hi,
                  <br />
                  I'am <span class="hero-title-color">Albilal</span>
                  <br />
                  <p className="hero-type">
                    <Type />
                  </p>
                </h1>
                <a href="/about" class="hero-button">
                  Know Me More
                  <FaArrowRight />
                </a>
                <SocialMedia />
              </div>
              <div class="hero-right">
                <img src={hero} alt="all" class="hero-img" />
              </div>
            </main>
          </section>
        </>
      )}
    </>
  );
}
export default Homes;
