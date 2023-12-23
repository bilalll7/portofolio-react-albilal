import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homes from "./pages/Homes";
import Abouts from "./pages/Abouts";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import NotFound from "./Utils/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homes />}></Route>
          <Route exact path="/about" element={<Abouts />}></Route>
          <Route exact path="/skills" element={<Skills />}></Route>
          <Route exact path="/service" element={<Services />}></Route>
          <Route exact path="/contact" element={<Contacts />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
