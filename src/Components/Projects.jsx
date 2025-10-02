import React from 'react'

function Projects() {
  return (
    <>
    
    <div className="project-section p-4 mt-14">
        <div className="heading flex items-center gap-2">
          <i class="fa-solid fa-rocket text-3xl"></i>
          <h1 className="text-xl tracking-wide">Projects</h1>
        </div>
        <div className="main grid grid-cols-1 md:grid-cols-2 gap-6 md:w-[90%] ">
        <div className="mini-card border-[#292929] border-2 bg-[#101010] rounded-xl p-4 mt-5">
          <img src="prj.avif" className="rounded-lg" alt="" />

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl mt-4">HelloBot</h1>
              <p className="text-[#c5c5c5] text-sm pt-1">
                SaaS & Startup · 8 Pages
              </p>
            </div>
            <button className="ml-4 bg-[#1f1f1f] p-3 rounded-4xl mt-5 text-[#cccccc]"><i class="fa-solid fa-up-right-from-square"></i></button>
          </div>


        </div>
        <div className="mini-card border-[#292929] border-2 bg-[#101010] rounded-xl p-4 mt-4">
          <img src="prj.avif" className="rounded-lg" alt="" />

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl mt-4">HelloBot</h1>
              <p className="text-[#c5c5c5] text-sm pt-1">
                SaaS & Startup · 8 Pages
              </p>
            </div>
            <button className="ml-4 bg-[#1f1f1f] p-3 rounded-4xl mt-5 text-[#cccccc]"><i class="fa-solid fa-up-right-from-square"></i></button>
          </div>
        </div>


        <div className="mini-card border-[#292929] border-2 bg-[#101010] rounded-xl p-4 mt-4">
          <img src="prj.avif" className="rounded-lg" alt="" />

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl mt-4">HelloBot</h1>
              <p className="text-[#c5c5c5] text-sm pt-1">
                SaaS & Startup · 8 Pages
              </p>
            </div>
            <button className="ml-4 bg-[#1f1f1f] p-3 rounded-4xl mt-5 text-[#cccccc]"><i class="fa-solid fa-up-right-from-square"></i></button>
          </div>
        </div>

        </div>
      </div>
    
    </>
  )
}

export default Projects