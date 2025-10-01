import React from "react";

function Experience() {
  return (
    <>
      <div className="experience-section p-4 mt-7">
        <div className="heading flex items-center gap-2">
          <i class="fa-solid fa-briefcase text-3xl"></i>
          <h1 className="text-xl tracking-wide">Experience</h1>
        </div>

        <div className="mini-card border-[#292929] border-2 bg-[#101010] rounded-xl p-4 mt-5">
          <h1 className="text-xl font-medium">Frontend Developer</h1>
          <p className="text-[#a2a2a2] text-sm pt-1">Freelance</p>

          <button className="bg-[#1f1f1f] text-lg font-medium p-1 ps-3 pe-3 rounded-sm mb-3 mt-2 border-[#292929] border-2">
            2022 - Present
          </button>
          <hr className="text-[#373737] h-3 m-auto rounded-4xl" />

          <p className="text-[#c5c5c2]">
            Developed modern and responsive websites using React, Tailwind and
            JavaScript. Delivered projects for small businesses and startups
            while ensuring fast performance and clean UI.
          </p>
        </div>

        <div className="mini-card border-[#292929] border-2 bg-[#101010] rounded-xl p-4 mt-3">
          <h1 className="text-xl font-medium">Web Designer</h1>
          <p className="text-[#a2a2a2] text-sm pt-1">Local Clients</p>

          <button className="bg-[#1f1f1f] text-lg font-medium p-1 ps-3 pe-3 rounded-sm mb-3 mt-2 border-[#292929] border-2">
            2023 – 2024
          </button>
          <hr className="text-[#373737] h-3 m-auto rounded-4xl" />

          <p className="text-[#c5c5c2]">
            Designed and built portfolio sites, dashboards and landing pages.
            Focused on user-friendly layouts and improved page performance
            across devices.
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience;
