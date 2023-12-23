import { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import Navbar from "../components/Navbar";
import { FaPaperPlane } from "react-icons/fa";

const override: cssOverride = {
  display: "flex",
  margin: "18rem auto",
};
function Contacts() {
  const redirectEmail = () => {
    window.open("https://lallisa657@gmail.com", "_blank");
  };
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
          <section class="contact" id="contact">
            <h2>Contact</h2>
            <h4>Contact Me</h4>
            <div class="form-wrapper w-full">
              <form action="">
                <input type="text" class="input-form" placeholder="Name" />
                <input type="text" class="input-form" placeholder="Email" />
                <textarea
                  class="input-form"
                  placeholder="Message"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>

                <button
                  type="submit"
                  class="contact-button"
                  onClick={redirectEmail}
                >
                  <FaPaperPlane />
                  Submit
                </button>
              </form>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Contacts;
