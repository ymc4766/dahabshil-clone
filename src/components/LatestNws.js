import React from "react";

const LatestNws = () => {
  return (
    <div className="w-full ">
      <h1 className="text-4xl text-black font-bold text-center m-2">
        Latest News
      </h1>
      <div className="max-w-[1000px] mx-auto py-6 px-4">
        <div className="grid sm:grid-cols-3 gap-7">
          <div className="flex flex-col space-y-2 ">
            <img src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2023/03/Ramadan-dates-600x400.jpg.webp" />
            <p className="text-sm text-green-500">
              Win £100 and a Year of Transfers with No Fees
            </p>
            <p className="text-green-400">with Dahabshiil</p>
            <b className="text-sm text-gray-500">March 24, 2023</b>

            <p className="text-sm">
              Join Dahabshiil’s #IShareWithDahabshiil Ramadan Competition and
              stand a chance to win fee-free transfers for a year and £100
              credit!
            </p>
          </div>

          <div className="flex flex-col space-y-2 ">
            <img src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2023/03/Ramadan_Blog_Image-600x392.png.webp" />
            <p className="text-sm text-green-500">
              Get Ready for Ramadan with Dahabshiil
            </p>
            <b className="text-sm text-gray-500">May 10, 2023</b>

            <p className="text-sm">
              Dahabshiil commits to supporting the community during the Holy
              Month of Ramadan.
            </p>
          </div>

          <div className="flex flex-col space-y-2 ">
            <img src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2023/03/Ramadan-dates-600x400.jpg.webp" />
            <p className="text-sm text-green-500">
              How to open a non-resident bank account in Canada
            </p>

            <b className="text-sm text-gray-500">December 2, 2022</b>

            <p className="text-sm">
              Here is all you need to know about opening a bank account in
              Canada if you are not a resident.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNws;
