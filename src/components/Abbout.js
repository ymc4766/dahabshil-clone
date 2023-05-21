import { AiFillStar } from "react-icons/ai";
import React from "react";

const Abbout = () => {
  return (
    <div className="w-full bg-white text-black  bg-gray-200 py-10">
      <div className="max-w-[1240px] w-full m-auto mx-auto px-3 flex flex-col items-center">
        <div className="flex items-center space-x-2 mb-[100px] px-3 mt-4 ">
          <p className="grid md:flex ">
            Our customers say Excellent{" "}
            <span className="flex ">
              <AiFillStar className="mt-1  bg-[#116130] py-1 px-1 ml-1 mr-1 text-white" />{" "}
              <AiFillStar className="mt-1  bg-[#116130] py-1 px-1 ml-1 mr-1 text-white" />{" "}
              <AiFillStar className="mt-1  bg-[#116130] py-1 px-1 ml-1 mr-1 text-white" />{" "}
              <AiFillStar className="mt-1  bg-[#116130] py-1 px-1 ml-1 mr-1 text-white" />{" "}
              4.5 out of 5 based on 1,095 reiews <br />
              <AiFillStar className="mt-1  bg-[#116130] py-1 px-1 ml-1 mr-1 text-white" />{" "}
              <b>Trustpilot</b>{" "}
            </span>
          </p>
          {/* <div className="flex items-center w-full">
            <span className="text-white bg-[#54B435] py-1 px-1 mr-1"></span>{" "}
            <span className="text-white bg-[#54B435] py-1 px-1 mr-1">
              <AiFillStar />
            </span>{" "}
            <span className="text-white bg-[#54B435] py-1 px-1 mr-1">
              <AiFillStar />
            </span>{" "}
            <span className="text-white bg-[#54B435] py-1 px-1 mr-1">
              <AiFillStar />
            </span>{" "}
            <span className="text-white bg-[#54B435] py-1 px-1 mr-2">
              <AiFillStar />
            </span>{" "}
            <span className="text-white bg-[#54B435] py-1 px-1 mr-2">
              <AiFillStar />
            </span>{" "}
          </div> */}
        </div>
        <div className="px-3  py-6 w-full max-w-[1000px] h-full">
          <h3 className="text-6xl p-3 font-bold  w-full text-center">
            Secure money Transfer You can Trust{" "}
          </h3>
          <p className="text-2xl my-3  font-normal text-gray-600 text-center ">
            Your money transfers are protected and secure, thanks to our
            industry-leading technology, giving you peace of mind when sending
            money to friends and family abroad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 ">
          <div className="bg-white border border-gray-300 py-10 px-[100px]">
            <img
              className="w-[8rem]"
              src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/PCI.svg"
              alt="/"
            />
          </div>
          <div className="bg-white border border-gray-300 py-10 px-[100px]">
            <img
              className="w-[8rem]"
              src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/VISA.png.webp"
              alt="/"
            />
          </div>{" "}
          <div className="bg-white border border-gray-300 py-10 px-[100px]">
            <img
              className="w-[8rem]"
              src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/MasterCard.png.webp"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abbout;
