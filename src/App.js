import React from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Language from "./components/Language";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-12 space-y-24 my-24">
        <About />
        <Education />
        <Language />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
