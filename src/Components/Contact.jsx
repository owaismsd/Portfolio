import React from "react";

function Contact() {
  return (
    <>
      <div className="contact p-4 mt-10">
        <div className="heading flex items-center gap-2">
          <i class="fa-solid fa-paper-plane text-3xl"></i>
          <h1 className="text-xl tracking-wide">Contact</h1>
        </div>

        <h1 className="mt-4 text-2xl font-semibold">Let's Get in Touch!</h1>

        <div className="main md:flex gap-12">
          <div className="one md:w-[60%]">
            <div className="box bg-[#101010] flex items-center gap-4 rounded-md mt-5 p-1">
              <i class="fa-solid fa-phone-volume p-3 mt-2 text-2xl text-[#28e98c]"></i>
              <div className="into-one">
                <p className="text-[#c2c2c2] text-md pt-1 ps-1">Contact No</p>
                <h1 className="text-lg font-medium">+(92) 3439114135</h1>
              </div>
            </div>

            <div className="box bg-[#101010] flex items-center gap-4 rounded-md mt-5 p-1">
              <i class="fa-solid fa-envelope p-3 mt-2 text-2xl text-[#28e98c]"></i>
              <div className="into-one">
                <p className="text-[#c2c2c2] text-md pt-1 ps-1">Email</p>
                <h1 className="text-lg font-medium">owaisahmadmsd@gmail.com</h1>
              </div>
            </div>

            <div className="box bg-[#101010] flex items-center gap-4 rounded-md mt-5 p-1">
              <i class="fa-solid fa-location-dot p-3 mt-2 text-2xl text-[#28e98c]"></i>
              <div className="into-one">
                <p className="text-[#c2c2c2] text-md pt-1 ps-1">Address</p>
                <h1 className="text-lg font-medium">Islamabad, Pakistan</h1>
              </div>
            </div>
          </div>
          <div className="two">
            <div className="input mt-10 md:mt-5 md:w-[82%]">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-[#101010] w-[100%] p-2 rounded-md border-1 border-[#303030] outline-none focus:border-[#1f9d60]"
              />

              <input
                type="email"
                placeholder="Email"
                className="bg-[#101010] w-[100%] p-2 mt-3 rounded-md border-1 border-[#303030] outline-none focus:border-[#1f9d60]"
              />

              <input
                type="number"
                placeholder="Phone Number"
                className="no-arrows bg-[#101010] w-[100%] p-2 mt-3 rounded-md border-1 border-[#303030] outline-none focus:border-[#1f9d60]"
              />

              <textarea
                type="text"
                placeholder="Message"
                className="bg-[#101010] w-[100%] p-2 mt-3 rounded-md border-1 border-[#303030] h-30 resize-none outline-none focus:border-[#1f9d60]"
              />

              <button className="bg-[#28e98c] text-black w-[100%] mt-2 p-2 rounded-xl">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
