import React from "react";
import { Card } from "./components/Card.jsx";
import Heading from "./components/Heading.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <div className="main md:flex gap-4">
        <div className="div md:sticky md:top-0 md:h-screen">
          <Card />
        </div>
        <div className="semi md:w-[100%] md:mt-25">
          <Heading />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>

      <div className="fotter flex items-center gap-5 justify-center bg-[#101010] h-20 border-[#272727] border-t-2 mt-8">
        <img src="owaispng1.png" className="w-12 rounded-4xl" alt="" />
        <h1>Owais Ahmad</h1>
      </div>
    </>
  );
}

export default App;
