import React from "react";

const FlexibleMny = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-[1140px] mx-auto py-10  grid md:grid-cols-2 items-center justify-between gap-7 ">
        <div className="flex flex-col space-y-3 mt-12">
          <h1 className="text-4xl   font-bold text-gray-900 ">
            Flexible money transfers to suit your needs
          </h1>
          <p className="text-[25px] text-semibold py-4">
            Everyone has their own preferred methods of sending money to loved
            ones abroad. Our fast, flexible and trusted solution puts you in
            control. We want money transfers to be hassle-free.
          </p>

          <p className="text-[25px] text-semibold py-4">
            Whatever suits you and your recipients, we’ve got you covered.
            Dahabshiil is the most convenient money transfer service provider on
            the market. Enjoy peace of mind and flexibility for your future
            transactions. The choice is yours.
          </p>
        </div>

        {/* <div className="w-full h-full "> */}
        <img
          className="w-full object-cover"
          src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/flexible.png.webp"
          alt="/"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default FlexibleMny;
