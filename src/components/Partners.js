import React from "react";

const Partners = () => {
  return (
    <div className="max-w-[1140px] mx-auto w-full py-10 h-full">
      <h1 className="text-center text-4xl  font-bold text-black">
        our Partners
      </h1>
      <div className="grid grid-cols-4 sm:grid-cols-5 items-center justify-between gap-8 text-center">
        <img
          className="w-36"
          src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/05/dahabshilbank.png.webp"
          alt="/"
        />
        <img
          className="w-36"
          src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/05/east-africa-bank-logo.png.webp"
          alt=""
        />
        <img
          className="w-36"
          src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/05/somtel.png.webp"
          alt="/"
        />
        <img
          className="w-36"
          src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/05/aldahabexchnage.png.webp"
          alt="/"
        />
        <img
          className="w-36"
          src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2020/12/edahab.jpg.webp"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Partners;
