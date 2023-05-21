import React from "react";

const AccCreate = () => {
  return (
    <div className="max-w-[1000px] m-auto w-full py-10 grid sm:grid-cols-2">
      <div className="py-10">
        <h3 className="text-4xl p-4 text-gray-800 font-bold ">
          Create an eWallet for super-fast transfers
        </h3>
        <p className="text-1xl p-4 font-semibold">
          Dahabshiil offers an eWallet feature to make quick and easy transfers
          on the go.
        </p>

        <p className="text-lg p-2 font-semibold">
          Digital currency wallets are really convenient, especially for mobile
          transfers. Just add your chosen card details, and they’ll be stored
          securely so that you can send money to friends and family back home
          instantly, from wherever you are.
        </p>
      </div>

      <div className="flex flex-col w-full relative">
        <img
          alt="/"
          src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/eWalletPic.png.webp"
        />

        <div className="absolute ">
          <img
            alt="/"
            src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/eWalletPic.png.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default AccCreate;
