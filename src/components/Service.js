import React from "react";

const data = [
  {
    id: "01",
    img: "https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/Low-cost-transfers.jpg.webp",
    hdr: "Low fees",
    text: "Our super rates and low fees are hard to beat. Compare us with the competition. You save more with us.",
  },

  {
    id: "02",
    img: "https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/Secure-delivery.jpg.webp",
    hdr: "Secure Transaction",
    text: "Your funds are safe with us. Your transaction is secure end-to-end. We use AML system,SSL, Digital certificates, 2nd factor authentication and other security mechanism.",
  },
  {
    id: "03",
    img: "https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/Fast-service.jpg.webp",
    hdr: "fast",
    text: "Send your money to family and friends within minutes.",
  },
  {
    id: "04",
    img: "https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2021/06/Free-features.jpg.webp",
    hdr: "Trusted by millions",
    text: "50 years in remittance business, and we continue to serve millions of happy customers in over 120 countries",
  },
];

const Service = () => {
  return (
    <div className=" bg-white py-8  ">
      <div className="max-w-[1240px] mx-auto w-full h-full ">
        <div className="flex flex-col py-6">
          <h1 className="md:text-6xl text-6xl text-gray-800  px-3 py-4 text-center font-semibold ">
            Send, save and chat with Dahabshiil
          </h1>
          <p className="text-2xl font-semibold text-gray-600 text-center">
            Dahabshiil offers low-cost money transfers abroad, quick and secure
            delivery, and an instant chat service – all in one easy-to-use
            platform.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 ">
          {data.map((cur) => {
            return (
              <div key={cur.id} className="flex flex-col">
                <img className="w-full rounded-md" src={cur.img} alt="/" />
                <h3 className="text-3xl  font-semibold py-3">{cur.hdr}</h3>
                <p className="text-gray-700 text-sm">{cur.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
