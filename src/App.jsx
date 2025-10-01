import React from "react";
import Card from "./components/Card";
import Heading from "./Components/Heading";
import Experience from "./Components/Experience"

function App() {
  return (
    <>
      <Card />
      <Heading />
      <Experience />

      <div className="project-section p-4 mt-7">
        <div className="heading flex items-center gap-2">
          <i class="fa-solid fa-rocket text-3xl"></i>
          <h1 className="text-xl tracking-wide">Projects</h1>
        </div>

        <div className="mini-card border-[#292929] border-2 bg-[#101010] rounded-xl p-4 mt-5">

          <img src="owais.avif" className="w-screen h-50" alt="" />

          <h1 className="text-xl font-medium">Frontend Developer</h1>
          <p className="text-[#a2a2a2] text-sm pt-1">Freelance</p>

         
        </div>
        </div>
      
      
    </>
  );
}

export default App;
