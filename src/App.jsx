import React from "react";
import Card from "./Components/Card.jsx";
import Heading from "./Components/Heading.jsx";
import Experience from "./Components/Experience.jsx";
import Projects from "./Components/Projects.jsx";
import Education from "./Components/Education.jsx";
import Contact from "./Components/Contact.jsx";
import logo from "/src/assets/owaispng1.png";
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
        <img src={logo} className="w-12 rounded-4xl" alt="" />
        <h1>Owais Ahmad</h1>
      </div>
    </>
  );
}

export default App;
