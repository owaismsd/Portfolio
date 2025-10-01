import React from "react";

function Card() {
  return (
    <>
      <div className="profile-container border-[#292929] border-2 m-4 rounded-3xl h-145 bg-[#101010]">
        <div className="content text-center">
          <div className="image flex justify-center border-[#292929] border-2 m-4 rounded-2xl">
            <img src="owaispng1.png" className="rounded-2xl" />
          </div>
          <button className="border-[#292929] border-2 m-4 rounded-lg p-2 ps-5 pe-5">
            🪐 Available for work
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
              🤍
            </span>
            <span className="border-2 border-[#292929] rounded-xl p-1 text-2xl m-1">
              🤍
            </span>
          </div>

          <button className="border-[#292929] border-1 me-2 p-2 rounded-lg bg-[#232323]">
            📩 Download CV
          </button>
          <button className="mt-5 p-2 rounded-lg bg-[#22d37df8] text-black border-[#292929] border-2">
            📞 Contact Me
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
