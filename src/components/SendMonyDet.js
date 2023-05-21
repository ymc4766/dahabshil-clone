import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsGooglePlay, BsApple } from "react-icons/bs";
const SendMonyDet = () => {
  return (
    <div className="bg-[#F0EEED]  py-10 px-4">
      {" "}
      <div className="max-w-[1240px] mx-auto w-full h-full grid sm:grid-cols-2 gap-7">
        <div className="flex flex-col px-3 py-8  mt-[34px]">
          <h3 className="text-5xl  font-semibold text-center  p-3">
            Want to send money on the go? Download the Dahabshiil app!
          </h3>
          <p className="text-sm font-bold p-4 text-gray-600">
            Send money and track your transfers on the go, with the Dahabshiil
            app. Our easy-to-use app enables users to make money transfers in
            just a few taps.
          </p>

          <p className="text-lg font-bold text-center text-gray-600 py-4">
            Also, our mobile app offers an awesome free instant chat service, so
            you connect with friends and family. Invite people directly from the
            app, and you can chat and make video calls at home or on the move.
          </p>

          <div className="flex items-center  space-x-4">
            <div className="flex flex-col">
              <button className="flex items-center space-x-2 bg-black p-2 rounded-md text-white">
                <BsGooglePlay className="text-gray-200" size={24} />

                <b>Get in Google Play</b>
              </button>
              <div className="flex mt-2">
                <AiFillStar className="text-green-500" />
                <AiFillStar className="text-green-500" />
                <AiFillStar className="text-green-500" />
                <AiOutlineStar className="text-green-500" />
                <AiOutlineStar className="text-green-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <button className="flex items-center space-x-2 bg-black p-2 rounded-md text-white">
                <BsApple size={24} />
                <b>Get in AppStore</b>
              </button>
              <div className="flex mt-2">
                <AiFillStar className="text-green-500" />
                <AiFillStar className="text-green-500" />
                <AiFillStar className="text-green-500" />
                <AiFillStar className="text-green-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <img
            alt="/"
            src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/09/app-mobile.png.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default SendMonyDet;
