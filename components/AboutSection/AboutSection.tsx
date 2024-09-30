import { CardData, cardData } from "@/constants";
import React from "react";
export const AboutUsSection: React.FC = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center my-10 px-5">
      <div className="container w-full text-center flex flex-col justify-center items-center">
        <h1 className=" text-secondaryColor text-2xl sm:text-4xl md:text-4xl font-bold mb-4 reveal reveal-from-left">
          Why Choose 
        </h1>
        <h2 className="relative mt-11 text-3xl sm:text-3xl md:text-5xl font-bold text-secondaryColor mb-2 reveal reveal-from-right">
          <span className="border-t-2 border-thirdColor w-[90px] lg:w-[120px] h-0 inline-block mr-4 mb-2"></span>
         Adore
          <span className="border-t-2 border-thirdColor w-[90px] lg:w-[120px] h-0 inline-block ml-3 mb-2"></span>
        </h2>

        <p className="text-l mt-14 lg:mt-16 sm:text-xl md:text-2xl text-secondaryColor leading-relaxed max-w-7xl lg:px-16 text-center reveal reveal-from-left">
          Welcome to the pinnacle of luxury saloon, where every detail
          is meticulously crafted to exceed your expectations. Our exclusive
          boutique development offers acollection of 4, 5 and 6 star ratings,
          each a masterpiece of design and sophistication.
        </p>
      </div>
      <div className="w-full flex items-center justify-between flex-row md:flex-row py-11 md:py-24  px-0 md:px-32 gap-6 md:gap-20 flex-wrap md:flex-nowrap" >
        {cardData.map((card: CardData, index: number) => (
          <div key={index} className="bg-secondaryColor flex items-center justify-center rounded-md flex-col gap-6 py-2 w-[155px] md:w-[300px] md:h-[250px] flex-wrap">
            <div
              className="bg-primaryColor flex items-center justify-center rounded-full py-4 px-4"
              style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)' }}
            >
              <card.icon size={50} className="text-secondaryColor" />
            </div>
            <h1 className="text-xl text-primaryColor text-center">
              {card.title}
            </h1>
            <p className=" text-l text-center text-primaryColor">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
