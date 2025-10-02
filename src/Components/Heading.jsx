import React from 'react'

function Heading() {
  return (
    <>

<div className="content p-4">
        <p className="pb-4 text-stone-300 text-lg">👋 Hello</p>
        <div className="heading text-3xl font-medium pb-5">
          <h1>I'm Owias Ahmad,</h1>
          <h1 className="text-[#22d37df8]">Web Designer</h1>
          <h1>Creating user-friendly digital experiences. </h1>
        </div>

        <p className="leading-relaxed md:text-lg md:text-[#c8c8c8]">
          I specialize in creating clean, user-friendly digital experiences by
          blending creativity with functionality. With a strong background in
          interactive design, I focus on crafting designs that not only look
          great but also provide smooth and engaging user interactions, helping
          ideas come to life seamlessly.
        </p>
        {/* Experiences */}
        <div className="flex-content grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          <div className="one text-center">
            <h1 className="font-medium text-3xl pb-3">15+</h1>
            <p className="text-gray-300">Complated Projects</p>
          </div>
          <div className="two text-center">
            <h1 className="font-medium text-3xl pb-3">4+</h1>
            <p className="text-gray-300">Years of Experience</p>
          </div>

          <div className="three text-center">
            <h1 className="font-medium text-3xl pb-3">12+</h1>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="four text-center">
            <h1 className="font-medium text-3xl pb-3">10+</h1>
            <p className="text-gray-300">Awards Received</p>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Heading;