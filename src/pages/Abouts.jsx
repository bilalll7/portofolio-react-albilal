import { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import Navbar from "../components/Navbar";
import aboutImg from "../img/profil1.png";
import Footer from "../components/Footer";
import { FaDownload } from "react-icons/fa";
import Education from "../components/Education";

const override: cssOverride = {
  display: "flex",
  margin: "24rem auto",
};
function Abouts() {
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
          <section class="about" id="about">
            <h2>About Me</h2>
            <h4>My Profile</h4>
            <div class="about-wrapper">
              <div class="about-img">
                <img src={aboutImg} alt="all1" />
              </div>
              <div class="about-content">
                <h3>I'am Albilal</h3>
                <p>
                  My Name is Albilal Bintang Iskandar. I have 2+ years of
                  experience in PHP, WordPress & ReactJs which includes theme
                  Implementation & customization, API integration, Payment
                  Gateway Integration, WordPress plugin Implementation &
                  Development, eCommerce Solutions, and Microservices of any
                  type of website according to your requirements.
                </p>
                <p>
                  I have the ability to understand business requirements in
                  order to provide precise technical solutions.
                </p>
                <p>
                  My focus is to move businesses forward by keeping a
                  customer-centric approach.
                </p>
                <p>
                  I strive to provide innovative, cost-effective, and optimum
                  solutions to drive growth to businesses around the world. My
                  aim is to enhance business performance by implementing
                  high-quality IT processes.
                </p>
                <p>
                  Individual with good analytical skills, highly professional
                  attitude, excellent time management skills, and strong
                  determination to do a great job. Dedicating life to develop
                  more significant programs by learning and working along the
                  way.
                </p>
                <p className="p-last">
                  I'll fully project manage your brief from start to finish.
                  <br />
                  <br />
                  Cheers.
                </p>
                <a href="/*" className="about-button">
                  <FaDownload />
                  Download CV
                </a>
              </div>
            </div>
          </section>
          <Education />
        </>
      )}
    </>
  );
}
export default Abouts;
