import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen py-6  flex flex-col ">
      <div className="">
        <div className="w-full bg-gray-700/90  absolute">
          <img
            className="w-full object-cover mix-blend-overlay"
            alt="/"
            src="https://images.pexels.com/photos/4963437/pexels-photo-4963437.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>

        <div className=" max-w-[1000px] mx-auto text-white relative ">
          <div>
            <h3>best Way to send Money fast Ansd Secure </h3>

            <p>
              {" "}
              for decorative images for decorative images for decorative images
              for decorative images for decorative images
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
