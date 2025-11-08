import React from "react";
import logo from "/src/assets/owaispng1.png";
import resume from "/src/assets/Owais_Ahmad_Resume.pdf";
function Card() {
  return (
    <>
      <div className="profile-container border-[#292929] border-2 m-4 rounded-3xl h-145 md:h-151 md:w-[84%] md:m-13 bg-[#101010]">
        <div className="content text-center">
          <div className="image flex justify-center border-[#292929] border-2 m-4 rounded-2xl">
            <img src={logo} className="rounded-2xl" />
          </div>
          <button className="border-[#292929] border-2 rounded-lg p-2 ps-5 pe-5 flex items-center gap-3 m-auto">
            <i class="fa-solid fa-circle fa-beat-fade text-[8px] text-[#4eb040]"></i>{" "}
            Available for work
          </button>

          <h1 className="text-3xl font-semibold p-2">Owais Ahmad</h1>

          <div className="social-btn flex justify-center">
            <span className="border-2 border-[#292929] rounded-xl p-1 text-2xl m-1">
              <i class="fa-brands fa-instagram"></i>
            </span>
            <span className="border-2 border-[#292929] rounded-xl p-1 text-2xl m-1">
              <i class="fa-brands fa-twitter"></i>
            </span>
            <span className="border-2 border-[#292929] rounded-xl p-1 text-2xl m-1">
              <i class="fa-brands fa-youtube"></i>
            </span>
            <span className="border-2 border-[#292929] rounded-xl p-1 text-2xl m-1">
              <i class="fa-solid fa-bell"></i>
            </span>
            <span className="border-2 border-[#292929] rounded-xl p-1 text-2xl m-1">
              <i class="fa-solid fa-share"></i>
            </span>
          </div>

          <button className="border-[#292929] border-1 me-2 p-2 rounded-lg bg-[#232323]">
            <i class="fa-solid fa-download"></i>{" "}
            <a href={resume} download="resume">
              Download CV
            </a>
          </button>
          <button className="mt-5 p-2 rounded-lg bg-[#22d37df8] text-black border-[#292929] border-2">
            <i class="fa-regular fa-paper-plane"></i> Contact Me
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
