import React from "react";

const Landing = () => {
  return (
    <div className="w-full py-10 h-screen">
      <img
        className="w-full object-cover top-0 left-0 h-screen"
        alt="/"
        src="https://images.pexels.com/photos/4963437/pexels-photo-4963437.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <div className="bg-black/30  absolute  top-0 left-0 w-full h-screen"></div>
      <div className="absolute top-0 w-full h-full flex  flex-col justify-center  text-white">
        <div
          className="md:ml-[10%]  max-w-[1100px]   m-auto  absolute md:flex  items-center space-c-6"
        >
          <div className="flex flex-col">
            <span className="text-5xl text-center font-semibold ">
              {" "}
              Sending Money With Us is Easy And fast
            </span>
            <p className="text-lg py-5 font-semibold text-center">
              Choose the Sending point from our wide network of agents
            </p>
          </div>
          <div className=" bg-white rounded-sm px-10 p-3 ml-3 py-8 mr-3">
            <form className="">
              <div
                className="text-gray-500 border-gray-400 mt-1 w-full  p-3 shadow-md
              overflow-shadow-lg flex justify-between items-center"
              >
                <div className=" mr-3  ">
                  <select className="px-2 ">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="AUD">AUD</option>
                    <option value="GBP">GBP</option>{" "}
                    <option value="CHF">CHF</option>
                    <option value="JPY">JPY</option>{" "}
                    <option value="Cad">CAD</option>
                    {/* <option value="EUR"></option> */}
                  </select>
                </div>

                <p className="text-3xl font-semibold"> $ 100.00</p>
              </div>

              <div className=" shadow-lg px-2 mt-2 p-3 w-full ">
                <p className=" px-3 py-2 text-gray-200 text-sm">
                  1 $ = 74.00 /-{" "}
                </p>
                <p className=" text-sm text-gray-400 ml-3">
                  Our transfer rate fee 2.89 $ bank Deposit
                </p>
              </div>

              <div className="text-gray-500 border-gray-400 mt-2 w-full p-4 shadow-md overflow-shadow-lg flex justify-between items-center">
                <div className=" mr-3 bg-white ">
                  <select className="px-2 border-gray-300">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="AUD">AUD</option>
                    <option value="GBP">GBP</option>{" "}
                    <option value="CHF">CHF</option>
                    <option value="JPY">JPY</option>{" "}
                    <option value="Cad">CAD</option>
                    {/* <option value="EUR"></option> */}
                  </select>
                </div>

                <p className="text-3xl font-semibold"> $ 100.00</p>
              </div>
              <button className="p-4 bg-[#54B435]  px-3 mt-4 w-full z-10 rounded-sm text-white">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
