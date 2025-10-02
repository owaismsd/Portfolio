import React from "react";

function Education() {
  return (
    <>
      <div className="experience-section p-4 mt-14">
        <div className="heading flex items-center gap-2">
          <i class="fa-solid fa-graduation-cap text-3xl"></i>
          <h1 className="text-xl tracking-wide">Education</h1>
        </div>

        <div className="mini-card border-[#292929] border-2 bg-[#101010] rounded-xl p-4 mt-5">
          <h1 className="text-xl font-medium">NUML University Islamabad</h1>
          <p className="text-[#a2a2a2] text-sm pt-1">BSCS</p>

          <button className="bg-[#1f1f1f] text-lg font-medium p-1 ps-3 pe-3 rounded-sm mb-3 mt-2 border-[#292929] border-2">
            2025 - Present
          </button>
          <hr className="text-[#373737] h-3 m-auto rounded-4xl" />

          <p className="text-[#c5c5c2] m">
            Currently pursuing a Bachelor’s in Computer Science, focusing on
            programming, data structures, algorithms, and software development.
            My education combines theoretical knowledge with practical learning
            to build a strong foundation in computer science.
          </p>
        </div>

        <div className="mini-card border-[#292929] border-2 bg-[#101010] rounded-xl p-4 mt-5">
          <h1 className="text-xl font-medium">Qurtaba College</h1>
          <p className="text-[#a2a2a2] text-sm pt-1">FSC</p>

          <button className="bg-[#1f1f1f] text-lg font-medium p-1 ps-3 pe-3 rounded-sm mb-3 mt-2 border-[#292929] border-2">
            2022 - 2024
          </button>
          <hr className="text-[#373737] h-3 m-auto rounded-4xl" />

          <p className="text-[#c5c5c2]">
            Completed FSc in Computer Science from Qurtaba College D.I. Khan
            (2022–2024). During this program, I gained a strong theoretical
            foundation in computing and learned practical programming skills
            with C++.
          </p>
        </div>
      </div>
    </>
  );
}

export default Education;
