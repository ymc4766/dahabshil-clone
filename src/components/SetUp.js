import React from "react";

const SetUp = () => {
  return (
    <div className="w-full h-full bg-[#F2F2F2]/80 py-10 ">
      <div className="max-w-[1100px] mx-auto grid sm:grid-cols-2 gap-10  ">
        <div className="w-full py-4">
          <img
            src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/Get-started.jpg.webp"
            alt="/"
          />
        </div>

        <div className="">
          <h2 className="text-5xl font-bold text-center  mb-4 ">
            Get set up and send money abroad in minutes
          </h2>
          <div className="flex flex-col space-y-5 ">
            <div className="flex space-x-4 ">
              <p
                className="text-bold  text-center
               text-white  bg-green-600 h-full rounded-full  px-5 py-3  "
              >
                {" "}
                1{" "}
              </p>
              <div className="flex flex-col ">
                <h3 className="text-1xl font-bold ">Enter amount</h3>
                <p className="text-sm font-bold text-gray-700  mt-2">
                  Simply enter the amount you want to send in the space provided
                </p>
              </div>
            </div>

            <div className="flex space-x-4 ">
              <p
                className="text-bold  text-center
               text-white bg-green-600 rounded-full h-full
                   px-5 py-3  "
              >
                {" "}
                2{" "}
              </p>

              <div className="flex flex-col ">
                <h3 className="text-1xl font-bold ">Enter amount</h3>
                <p className="text-sm font-bold text-gray-700  mt-2">
                  Select a new or existing recipient – you can store recipient
                  details securely for even faster transfers
                </p>
              </div>
            </div>
            <div className="flex space-x-4 ">
              <p
                className="text-bold  text-center
               text-white bg-green-600 rounded-full h-full
                   px-5 py-3  "
              >
                {" "}
                3{" "}
              </p>

              <div className="flex flex-col ">
                <h3 className="text-1xl font-bold ">Enter amount</h3>
                <p className="text-sm  text-gray-700   mt-2">
                  Our handy summary gives you a clear breakdown of your proposed
                  transfer. Review and send money securely!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default SetUp;
