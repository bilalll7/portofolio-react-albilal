import { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const override: cssOverride = {
  display: "flex",
  margin: "24rem auto",
};
function NotFound() {
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
        <MoonLoader color={"#3e6ff4"} size={55} cssOverride={override} />
      ) : (
        <div className="notfound-wrapper">
          <h1 className="notfound-number">
            4<span>0</span>4
          </h1>
          <h4 className="notfound-title">Not Found</h4>
          <a className="notfound-btn" href="/">
            Go to HomePage
          </a>
        </div>
      )}
    </>
  );
}

export default NotFound;
